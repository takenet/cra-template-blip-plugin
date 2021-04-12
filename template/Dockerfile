FROM node:13-alpine as buildContainer

RUN ["mkdir", "/app"]

WORKDIR /app

COPY package.json /app

RUN ["npm", "install"]

COPY . .

RUN ["npm", "run", "build"]

FROM nginx:1.17.1-alpine
COPY --from=buildContainer /app/build /usr/share/nginx/html

EXPOSE 80