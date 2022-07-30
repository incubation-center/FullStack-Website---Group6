# FROM node:16-alpine AS dependencies

# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn

# FROM node:16-alpine AS build

# WORKDIR /app
# COPY --from=dependencies /app/node_modules ./node_modules

# COPY prisma ./prisma/

# COPY .env ./

# COPY . .

# # RUN npx prisma migrate deploy
# RUN npx prisma generate
# RUN yarn build

# FROM node:18-alpine AS deploy

# WORKDIR /app

# ENV NODE_ENV production

# COPY --from=build /app/public ./public
# COPY --from=build /app/package.json ./package.json
# COPY --from=build /app/.next/standalone ./
# COPY --from=build /app/.next/static ./.next/static

# EXPOSE 3000

# ENV PORT 3000

# CMD ["node", "server.js"]

FROM node:16-alpine AS base
# RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app

COPY package.json yarn.lock ./

FROM base as build 
RUN export NODE_ENV=production
RUN yarn

COPY . .
RUN yarn run prisma:generate
RUN yarn build

FROM base as prod-build

RUN yarn install --production
COPY prisma prisma
RUN yarn run prisma:generate
RUN cp -R node_modules prod_node_modules

FROM base as prod

COPY --from=prod-build /app/prod_node_modules /app/node_modules
COPY --from=build  /app/.next /app/.next
COPY --from=build  /app/public /app/public
COPY --from=build  /app/prisma /app/prisma

EXPOSE 3000
CMD ["yarn", "start"]
