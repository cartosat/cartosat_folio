FROM node:18-alpine

COPY . /cartosat-folio

WORKDIR /cartosat-folio

RUN npm install

CMD ["npm", "start"]
