FROM node:8-alpine

WORKDIR /node-build
COPY . .
VOLUME 'src:/node-build/src'
VOLUME 'dist:/node-build/dist'
RUN npm ci & npm i -g .
CMD npm run build
