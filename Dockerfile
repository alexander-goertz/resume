FROM node:latest

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install


COPY . /app/

RUN npm run build

CMD ["node", "server/index.mjs" ]