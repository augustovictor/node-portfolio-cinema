check_npm = if [ ! -d "node_modules" ]; then npm install; fi

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
	docker-compose up --build --force-recreate

down:
	@echo DOCKER-COMPOSE DOWN
	docker-compose down -v --rmi local

remove-all:
	@echo REMOVING ALL CONTAINERS
	docker container rm -f $(docker ps -a -q)

xo:
	@echo RUNNING XO - CODE QUALITY
	./node_modules/.bin/nodemon -x ./node_modules/.bin/xo