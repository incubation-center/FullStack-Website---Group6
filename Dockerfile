FROM node:lts AS base

RUN mkdir -p /app

RUN export NODE_ENV=production

WORKDIR /app

COPY package.json /app
# COPY yarn.lock /app

RUN yarn

COPY . /app

RUN yarn run prisma:generate

EXPOSE 3002

CMD ["yarn", "dev"]
