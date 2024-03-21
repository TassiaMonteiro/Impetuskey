FROM node:latest

WORKDIR /impetuskeyapi

COPY . .

RUN rm -rf node_modules
RUN npm i

EXPOSE 3000

CMD ["node", "index.js"]