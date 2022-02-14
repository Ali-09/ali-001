#!/bin/bash
git pull
docker-compose down
docker stop portafolio_front
docker rm portafolio_front
docker rmi portafolio_front
docker prune
docker-compose up --build -d