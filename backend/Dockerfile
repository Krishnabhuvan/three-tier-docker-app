FROM node:18

WORKDIR /app

COPY . .

RUN npm init -y && npm install express mongoose

CMD ["node", "index.js"]