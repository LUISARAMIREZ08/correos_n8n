# Etapa 1: build de la app
FROM node:18 AS build

WORKDIR /app

COPY show-mail/package*.json ./

RUN npm install

COPY show-mail ./

RUN npm run build

# Etapa 2: servir archivos estáticos con Nginx
FROM nginx:alpine

# Copiamos el build al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
