FROM node:22

# Dossier de travail
WORKDIR /srv/app

# Copie uniquement les fichiers nécessaires pour installer
COPY package.json package-lock.json* ./

# Installation des dépendances
RUN npm install

# Copie du code
COPY . .

# Expose le port
EXPOSE 1337

# Commande par défaut
CMD ["npm", "run", "develop"]
