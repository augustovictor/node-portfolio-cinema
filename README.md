# node-portfolio-cinema

[![Code Climate](https://codeclimate.com/github/augustovictor/node-portfolio-cinema/badges/gpa.svg)](https://codeclimate.com/github/augustovictor/node-portfolio-cinema)
[![Test Coverage](https://codeclimate.com/github/augustovictor/node-portfolio-cinema/badges/coverage.svg)](https://codeclimate.com/github/augustovictor/node-portfolio-cinema)

<p align="center">
    <img src="src/public/images/popcorn.png" />
</p>

## About
The goal of this application is to comprise several different parts and steps regarding development, infrastructure and quality.

## Tasks manager
All tasks and progress can be tracked on [this trello board](https://trello.com/b/Q54vZsrM/node-portfolio-cinema).

## Application Checklist
- [ ] Monitoring:
    - [x] **A**pplication **P**erformance **M**onitoring usage: New relic;
    - [ ] Hardware: -;
- [x] Logging:
    - [x] Smart Logging: Winston;
    - [x] Smart aggregation: Elastic;
    - [x] Smart visualization: Kibana;
- [ ] API documentation using Swagger;
- [ ] Reverse proxy for static content;
- [x] Lock dependencies: npm shrinkwrap;
- [ ] Unit tests;
- [ ] Integration tests;
- [x] Tests coverage report: Istanbul;
- [x] Code quality
    - [x] Code climate;
    - [x] Eslint;
- [x] Code versioning: Git;
    - [x] Commit messages convention: Karma;
- [x] Continuous Integration: CircleCI;
- [ ] Guard and restart process upon failure;
- [x] Utilize all CPU cores: PM2;
- [ ] Maintenance endpoint
    - [ ] Healthcheck endpoint;
    - [ ] Switch log level without restart;
    - [ ] Generate headdump;
    - [ ] Return basic stats for monitoring (No need since we're using Newrelic);
- [ ] Code production ready;
    - [x] Single entrypoint
- [ ] Security;
- [ ] Measure and guard the memory usage;
- [ ] Frontend using React/Redux;
- [ ] Divide application in microservices;
    - [ ] Implement distributed transactions tracing;
- [ ] Kill Servers almost every day;
- [ ] Tools that automatically detect vulnerabilities;
- [ ] TransactionId in each log statement;
- [x] Set NODE_ENV production;
- [ ] Automated, atomic and zero-downtime deployments;
- [ ] Change the application version in each deployment;
- [ ] Validate arguments using a dedicated library;
- [x] Use docker;
- [ ] Containers orchestration: AWS EC2 or Kubernetes;
- [ ] Use terraform;

## Instructions to run

1. Get all containers up and running
```sh
make up
```

2. Make an api call
```sh
curl -i localhost:3000
```

3. Destroy all containers, remove volumes and network
```sh
make down
```