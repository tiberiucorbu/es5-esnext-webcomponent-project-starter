FROM node:8-alpine

WORKDIR /node-build
COPY . .
VOLUME 'src:src'
RUN npm ci
RUN npm run build
