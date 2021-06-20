const PORT = process.env.PORT || 3000;
const HASURA_HOST = process.env.HASURA_HOST || "localhost";
const HASURA_PORT = process.env.HASURA_PORT || 8080;
const HASURA_SECRET = process.env.HASURA_SECRET || "";
const JWT_SECRET = process.env.JWT_SECRET || "79s2LqwF8jFUQ9Ka97HUrsz4G5Wne4AEhTXo7ANZeQh55HtJU9mnhjRBTDusXbKCw6h6bjyfbHR2y6G7";

module.exports = { PORT, HASURA_HOST, HASURA_PORT, HASURA_SECRET, JWT_SECRET }
