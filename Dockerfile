FROM node:8-alpine

ENV PORT=3000
ENV NEW_RELIC_KEY=6eb7936d237d394a7251ed31cc758a56287e86b2

EXPOSE $PORT

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json npm-shrinkwrap.json ./

RUN npm install --silent --progress=false && npm cache clean --force

COPY . .

RUN cp node_modules/newrelic

CMD ["npm", "start"]