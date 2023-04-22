FROM node:alpine as build
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build

FROM nginx:1.24.0-alpine
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html