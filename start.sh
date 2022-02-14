#!/bin/bash
git pull
docker-compose down
docker stop portafolio_front
docker rm portafolio_front
docker rmi ali-001_front
docker system prune
docker-compose up --build -d