FROM node:lts-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de Astro
EXPOSE 4321

# Configurar el host para que sea accesible desde fuera del contenedor
ENV HOST=0.0.0.0
ENV PORT=4321

# Ejecutar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
