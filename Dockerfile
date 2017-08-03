FROM node:8-alpine

ENV PORT=3000

# This variable should be set in production environment instead of in a file
ENV NEW_RELIC_KEY=API_KEY

EXPOSE $PORT

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json npm-shrinkwrap.json ./

RUN npm install --silent --progress=false && npm cache clean --force

COPY . .

CMD ["npm", "start"]