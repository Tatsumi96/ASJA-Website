# --- STAGE 1 : BUILD ---
FROM node:18-bullseye AS builder
WORKDIR /srv/app
COPY ./app/package*.json ./
RUN npm install
COPY ./app .
RUN npm run build
RUN npm prune --production

# --- STAGE 2 : PRODUCTION ---
FROM node:18-alpine
WORKDIR /srv/app

# Copie les dépendances, package.json, config, et public
COPY --from=builder /srv/app/node_modules ./node_modules
COPY --from=builder /srv/app/package.json ./package.json
COPY --from=builder /srv/app/config ./config
COPY --from=builder /srv/app/public ./public
COPY --from=builder /srv/app/dist ./dist

# >>> CORRECTION ICI : Inclus les fichiers cachés de Strapi si nécessaire
# (Contient la configuration et parfois les assets admin construits)
COPY --from=builder /srv/app/.strapi ./.strapi

# Ancien COPY qui a échoué (gardé en commentaire si vous voulez tester)
# # COPY --from=builder /srv/app/build ./build

# SECURITY
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /srv/app
USER appuser

EXPOSE 1337
CMD ["npm", "run", "start"]