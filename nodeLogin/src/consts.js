const PORT = process.env.PORT || 3000;
const HASURA_HOST = process.env.HASURA_HOST || "localhost";
const HASURA_PORT = process.env.HASURA_PORT || 8080;
const HASURA_SECRET = process.env.HASURA_SECRET || "";
const JWT_SECRET = process.env.JWT_SECRET || "HASURA_GRAPHQL_JWT_SECRET_WITH_AT_LEAST_32_CHARS";

module.exports = { PORT, HASURA_HOST, HASURA_PORT, HASURA_SECRET, JWT_SECRET }
