# Usa una imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto
COPY package*.json ./

# Instalar las dependencias del frontend
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del servidor de desarrollo de Angular
EXPOSE 4200

# Comando para iniciar el servidor Angular en desarrollo
CMD ["npm", "start"]
