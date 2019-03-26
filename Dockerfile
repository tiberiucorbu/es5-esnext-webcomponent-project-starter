FROM node:8-alpine

WORKDIR /node-build
COPY . .
VOLUME 'src:/node-build/src'
VOLUME 'dist:/node-build/dist'
RUN npm ci & npm i -g .
RUN npm run build