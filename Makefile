check_npm = if [ ! -d "node_modules" ]; then npm install; fi
nodemon = ./node_modules/.bin/nodemon
nodebin = ./node_modules/.bin

options:
	@echo ------------------------------------------
	@echo OPTIONS
	@echo make dev-watch: Start and watch lint and tests
	@echo make start: Start the application
	@echo make up: Starts the docker
	@echo make lint: run eslint and watch .js files
	@echo make lint-autofix: run eslint --fix on .js files
	@echo ------------------------------------------

start:
	$(call check_npm)
	@echo STARTING APPLICATION
	@npm start

up:
	$(call check_npm)

	@echo DOCKER-COMPOSE UP
	@docker-compose up --build --force-recreate

down:
	@echo DOCKER-COMPOSE DOWN
	@docker-compose down -v --rmi local

remove-all:
	@echo REMOVING ALL CONTAINERS
	@docker container rm -f $(docker ps -a -q)

lint:
	@echo RUNNING LINTER
	@node_modules/.bin/eslint "**/*.js" || exit 0

lint-autofix:
	@echo RUNNING LINTER
	@$(nodebin)/eslint "src/**/*.js" --fix || exit 0

tests:
	@echo RUNNING TESTS
	@export NODE_ENV=test && $(nodebin)/nyc --reporter=lcov --reporter=text $(nodebin)/mocha src/test/**/*.test.js

dev-watch:
	$(nodemon) --exec $(MAKE) tests lint

ports:
	@echo KIBANA: http://localhost:5601
	@echo ELASTICSEARCH: http://localhost:9200
	@echo NODE APP: http://localhost:3000