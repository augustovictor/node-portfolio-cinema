check_npm = if [ ! -d "node_modules" ]; then npm install; fi

start:
	$(call check_npm)

	npm start

up:
	$(call check_npm)

	@echo DOCKER-COMPOSE UP
	docker-compose up --build --force-recreate

down:
	@echo DOCKER-COMPOSE DOWN
	docker-compose down -v --rmi local