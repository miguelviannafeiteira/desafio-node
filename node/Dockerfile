FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install mysql --save

EXPOSE 8080

CMD ["node", "index.js"]