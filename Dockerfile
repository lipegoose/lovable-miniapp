FROM node:20-alpine

WORKDIR /app

# Instalar dependências
COPY package.json package-lock.json ./
RUN npm install

# Copiar os arquivos da aplicação
COPY . .

# Expor a porta da aplicação
EXPOSE 8080

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev"]