FROM node:14.11.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "converter.js"]