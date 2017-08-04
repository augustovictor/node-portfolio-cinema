#node:8-alpine
FROM keymetrics/pm2-docker-alpine:latest 

ENV PORT=3000

# This variable should be set in production environment instead of in a file
ENV NEW_RELIC_KEY=6eb7936d237d394a7251ed31cc758a56287e86b2

EXPOSE $PORT

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json npm-shrinkwrap.json ./

COPY pm2.json .

RUN npm install --production --silent --progress=false

RUN npm install --silent --progress=false && npm cache clean --force

COPY . .

# Use pm2-docker in production
# Use pm2-dev to watch files and restart upon change
CMD ["pm2-dev", "pm2.json"]