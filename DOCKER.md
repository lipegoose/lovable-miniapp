# Ambiente Docker para Desenvolvimento

Este projeto inclui uma configuração Docker para facilitar o desenvolvimento com hot-reload.

## Pré-requisitos

- Docker
- Docker Compose

## Como usar

1. **Iniciar o ambiente de desenvolvimento:**

```bash
# Usando o script auxiliar (recomendado)
./dev.sh

# Ou manualmente
docker-compose up
```

2. **Acessar a aplicação:**
   - Abra http://localhost:8080 no seu navegador

3. **Hot-reload:**
   - Edite os arquivos do projeto normalmente
   - As alterações serão detectadas automaticamente e a aplicação será atualizada no navegador

4. **Encerrar o ambiente:**
   - Pressione `Ctrl+C` no terminal onde o Docker está rodando
   - Para remover os containers: `docker-compose down`

## Estrutura

- `Dockerfile`: Configuração da imagem Docker
- `docker-compose.yml`: Configuração do serviço, portas e volumes
- `dev.sh`: Script auxiliar para iniciar o ambiente

## Informações adicionais

- A pasta de dependências `node_modules` é gerenciada dentro do container
- Todos os arquivos do projeto são sincronizados em tempo real com o container
- O Node.js está configurado para detectar alterações em arquivos usando polling (útil em alguns sistemas de arquivos) 