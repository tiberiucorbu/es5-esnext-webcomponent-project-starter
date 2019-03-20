FROM node:8-alpine

WORKDIR /node-build
COPY . .
RUN npm ci

VOLUME 'src:src'
RUN npm build
