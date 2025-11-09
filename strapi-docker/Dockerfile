# Utilise une version compatible avec Strapi v5
FROM node:18-bullseye

# Crée le dossier de l'app
WORKDIR /srv/app

# Copie les fichiers de ton app
COPY ./app/package*.json ./

# Installe les dépendances
RUN npm install --force --include=optional

# Copie le reste du code Strapi
COPY ./app .

# Reconstruit sharp pour le système Docker
RUN npm rebuild sharp --force

# Expose le port Strapi
EXPOSE 1337

# Démarre Strapi
CMD ["npm", "run", "develop"]
