# Hasura and basic email login handling all dockerized
Prebuild for a Graphql databse with already working role management and login handling

All set up with the use of Docker an Hasura, paired with a node Express server.

I'm talking in more detail about how this works and how it was created in [this blog post](https://coding-bits.net/blog/hasura-login-docker).

## How to use?

1. Fork this repository for whatever backend project you need
2. Install [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli), as well as Docker and Docker-compose
2. Edit the **buildLocal.sh** script to change the ```hasuraAdminSecret``` to ensure nobody will know it
3. Edit the **docker-compose.yaml** to change the ```hasuraAdminSecret``` there too at all places as well as the ```HASURA_GRAPHQL_JWT_SECRET_WITH_AT_LEAST_32_CHARS```.
4. Run the *buildLocal.sh* script and wait until the servers are running

# Licence
MIT License

Copyright (c) [2021] [Nils Rohr]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.