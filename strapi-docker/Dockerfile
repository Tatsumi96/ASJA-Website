# Stage 1: Build - Installe les dépendances et construit l'application
FROM node:18-bullseye AS builder

# Crée le dossier de l'app
WORKDIR /srv/app

# Copie les fichiers de dépendances et installe TOUTES les dépendances (incl. devDependencies)
COPY ./app/package*.json ./
RUN npm install

# Copie le reste du code de l'application
COPY ./app .

# Construit l'application pour la production
# La variable d'environnement NODE_ENV=production est généralement définie par la commande build de Strapi
RUN npm run build

# Supprime les dépendances de développement pour alléger le dossier node_modules
RUN npm prune --production

# ---

# Stage 2: Production - Crée l'image finale légère
FROM node:18-alpine

# Crée le dossier de l'app
WORKDIR /srv/app

# Copie les dépendances de production depuis le stage 'builder'
COPY --from=builder /srv/app/node_modules ./node_modules

# Copie les fichiers de l'application construite depuis le stage 'builder'
COPY --from=builder /srv/app/package.json ./package.json
COPY --from=builder /srv/app/dist ./dist
COPY --from=builder /srv/app/config ./config
COPY --from=builder /srv/app/database ./database
COPY --from=builder /srv/app/public ./public
COPY --from=builder /srv/app/.strapi ./.strapi

# Crée un utilisateur et un groupe dédiés pour l'application pour des raisons de sécurité
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Change le propriétaire des fichiers de l'application
USER root
RUN chown -R appuser:appgroup /srv/app
USER appuser

# Expose le port sur lequel Strapi s'exécutera
EXPOSE 1337

# Commande pour démarrer l'application en mode production
CMD ["npm", "run", "start"]
