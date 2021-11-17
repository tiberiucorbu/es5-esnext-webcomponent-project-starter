FROM node:17-alpine

WORKDIR /node-build
COPY . .
VOLUME 'src:/node-build/src'
VOLUME 'dist:/node-build/dist'
RUN npm ci && npm run build
