FROM node:lts-alpine

WORKDIR /opt/doutor-flauta

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run dev