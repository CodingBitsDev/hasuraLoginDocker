const PORT = process.env.PORT || 3000;
const HASURA_HOST = process.env.HASURA_HOST || "localhost";
const HASURA_PORT = process.env.HASURA_PORT || 8080;
const HASURA_SECRET = process.env.HASURA_SECRET || "";

module.exports = { PORT, HASURA_HOST, HASURA_PORT, HASURA_SECRET }
