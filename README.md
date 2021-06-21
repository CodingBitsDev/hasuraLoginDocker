# Hasura and basic email login handling all dockerized
Prebuild for a Graphql databse with already working role management and login handling

All set up with the use of Docker an Hasura, paired with a node Express server.

## How to use?

1. Fork this repository for whatever backend project you need
2. Install [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli), as well as Docker and Docker-compose
2. Edit the **buildLocal.sh** script to change the ```hasuraAdminSecret``` to ensure nobody will know it
3. Edit the **docker-compose.yaml** to change the ```hasuraAdminSecret``` there too at all places as well as the ```HASURA_GRAPHQL_JWT_SECRET_WITH_AT_LEAST_32_CHARS```.
4. Run the *buildLocal.sh* script and wait until the servers are running