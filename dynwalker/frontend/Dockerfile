FROM node:9.11

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app
WORKDIR /app

RUN npm install -s

CMD npm run start

EXPOSE 3000
