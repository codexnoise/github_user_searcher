# Establecer la imagen base con Node.js 18.13.0
FROM node:18.13.0

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar git (si aún no está instalado en la imagen base)
RUN apt-get update && apt-get install -y git

# Clonar el código fuente desde el repositorio de GitHub
# Asegúrate de reemplazar "URL_DEL_REPOSITORIO" con la URL real de tu repositorio
RUN git clone https://github.com/noisecodex/github_user_searcher.git .

# Instalar las dependencias del proyecto
RUN npm install

# Compilar la aplicación de React (si es necesario)
# Aquí debes agregar cualquier comando necesario para construir tu proyecto de React
# Por ejemplo: RUN npm run build

# Exponer el puerto en el que la aplicación de React estará escuchando
# Si tu aplicación de React utiliza un puerto diferente, asegúrate de cambiarlo aquí
EXPOSE 3007

# Comando para iniciar la aplicación de React dentro del contenedor
CMD ["npm", "start"]
