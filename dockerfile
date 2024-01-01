FROM node:18

##RUN apt-get update && apt-get install -y mysql-client
RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3008

CMD ["npx", "nodemon", "app.js"]
