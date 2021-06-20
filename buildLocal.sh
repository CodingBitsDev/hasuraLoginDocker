#!/bin/bash
sudo ls
sudo docker-compose up --build -d

cd hasura
hasura migrate apply --admin-secret 'hasuraAdminSecret'
hasura metadata apply --admin-secret 'hasuraAdminSecret' 