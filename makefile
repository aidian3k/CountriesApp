compose = docker-compose
remove = docker -f rm
containers = countries-app-frontend countries-app-backend

.PHONY: all, build, clean, stop

all: build

build:
	$(compose) up

stop:
	$(compose) down

clean:
	$(remove) $(containers)