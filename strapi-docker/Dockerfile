FROM node:22-alpine

# Installer dépendances système pour Sharp
RUN apk update && apk add --no-cache \
    build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install

WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node

EXPOSE 1337
CMD ["yarn", "develop"]
