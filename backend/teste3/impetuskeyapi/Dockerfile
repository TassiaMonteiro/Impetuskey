FROM node:latest

WORKDIR /impetuskeyapi

COPY . .

RUN rm -rf node_modules
RUN npm i
RUN npm install typeorm
RUN npm install express
RUN npm install pg

EXPOSE 3000

CMD ["yarn", "start"]