FROM node:alpine
WORKDIR /usr/app
COPY package.json ./
RUN npm install
EXPOSE 3001
COPY . .
CMD ["npm", "run", "start"]