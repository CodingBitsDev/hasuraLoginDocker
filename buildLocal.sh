#!/bin/bash
sudo ls
sudo docker-compose up --build -d

cd hasura
sleep 5

hasura migrate apply --admin-secret 'hasuraAdminSecret'
hasura metadata apply --admin-secret 'hasuraAdminSecret' 