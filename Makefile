check_npm = if [ ! -d "node_modules" ]; then npm install; fi
nodemon = ./node_modules/.bin/nodemon

options:
	@echo ------------------------------------------
	@echo OPTIONS
	@echo make start: Start the application
	@echo make up: Starts the docker
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
	@$(nodemon) --exec node_modules/.bin/eslint "**/*.js" || exit 0

lint-autofix:
	@echo RUNNING LINTER
	@$(nodemon) --exec node_modules/.bin/eslint "src/**/*.js" || exit 0

xo:
	@echo RUNNING XO - CODE QUALITY
	$(nodemon) -x ./node_modules/.bin/xo

tests-watch:
	@echo RUNNING AND WATCHING TESTS
	export NODE_ENV=test && $(nodemon) --exec ./node_modules/.bin/mocha src/test/**/*.test.js

ports:
	@echo KIBANA: http://localhost:5601
	@echo ELASTICSEARCH: http://localhost:9200
	@echo NODE APP: http://localhost:3000