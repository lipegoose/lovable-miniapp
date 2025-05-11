#!/bin/bash

# Script para gerar um build estático para deploy na Hostinger usando o container Docker

# Verificar se o container Docker está rodando
CONTAINER_ID=$(docker ps | grep lovable-miniapp_app | awk '{print $1}')

if [ -z "$CONTAINER_ID" ]; then
  echo "Erro: Container Docker não está rodando. Execute 'docker-compose up -d' primeiro."
  exit 1
fi

echo "Container Docker encontrado: $CONTAINER_ID"

# Garantir que o .htaccess existe
if [ ! -f "public_html/.htaccess" ]; then
  echo "Criando .htaccess para routing adequado..."
  cat > public_html/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
EOF
fi

# Criar pasta dist-prod se não existir
if [ ! -d "dist-prod" ]; then
  echo "Criando pasta dist-prod..."
  mkdir -p dist-prod
fi

# Executar comandos dentro do container Docker
echo "Configurando ambiente de produção no container..."
docker exec $CONTAINER_ID sh -c "export NODE_ENV=production"

echo "Gerando build de produção dentro do container..."
docker exec $CONTAINER_ID sh -c "npm run build" || { echo "Erro ao gerar build. Verifique os erros acima."; exit 1; }

# Verificar se a pasta dist foi criada com sucesso dentro do container
docker exec $CONTAINER_ID sh -c "[ -d 'dist' ]" || { echo "Erro: A pasta 'dist' não foi criada no container. O build falhou."; exit 1; }

# Copiar arquivos da build para pasta dist-prod dentro do container
echo "Preparando arquivos para deploy dentro do container..."
docker exec $CONTAINER_ID sh -c "rm -rf dist-prod/* && mkdir -p dist-prod && cp -r dist/* dist-prod/ && cp public_html/.htaccess dist-prod/" || { echo "Erro ao copiar arquivos da build."; exit 1; }

echo "Build concluído! Os arquivos para deploy estão na pasta 'dist-prod'."
echo "Preparando para fazer o deploy na Hostinger com os arquivos da pasta dist-prod"

git add .
git commit -am "pós build para deploy frontend automático"
git push
echo "fazendo o deploy do front"
git subtree push --prefix=dist-prod origin deploy-front
git status
echo "deploy do front realizado com sucesso"