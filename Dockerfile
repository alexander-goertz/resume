FROM node:latest

ENV AWS_ACCESS_KEY_ID AKIA6RJHGXNCEQ4M3BMB
ENV AWS_SECRET_ACCESS_KEY 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
ENV AWS_DEFAULT_REGION eu-central-1

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install


COPY . /app/

RUN npm run build

CMD ["node", "server/index.mjs" ]