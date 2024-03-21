FROM node:21.7.1-alpine3.19

WORKDIR /app

COPY . .

RUN npm install --force && npm run build

CMD ["npm", "run", "dev"]

