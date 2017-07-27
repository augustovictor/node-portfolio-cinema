FROM node:8-alpine

ENV PORT=3000

EXPOSE $PORT

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json npm-shrinkwrap.json ./

RUN npm install --silent --progress=false && npm cache clean --force

COPY . .

CMD ["npm", "start"]