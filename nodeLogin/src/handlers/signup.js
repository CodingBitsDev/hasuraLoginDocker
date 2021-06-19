const fetch = require("node-fetch");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HASURA_OPERATION = `
mutation ($name: String!, $email: String!, $password: String!){
  insert_users_one(object: {
    name: $name,
    email: $email,
    password: $password
  }) {
    id
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers: {
       'x-hasura-admin-secret' : 'renjicretAdmin'
      },
      body: JSON.stringify({
        query: HASURA_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
  

const handler = async (req, res) => {

  // get request input
  const { name, email, password } = req.body.input;
  let lcEmail = email.toLowerCase();

  // run some business logic
  let hashedPassword =  await bcrypt.hash(lcEmail + password, 10)

  // execute the Hasura operation
  const { data, errors } = await execute({ name, email: lcEmail, password: hashedPassword });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }
  
  const tokenContents = {
    sub: data.insert_users_one.id.toString(),
    name: name,
    iat: Date.now() / 1000,
    iss: "http://localhost/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": data.insert_users_one.id.toString(),
      "x-hasura-default-role": "user",
      "x-hasura-role": "user"
    },
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
  }
  
  const token = jwt.sign(tokenContents, "79s2LqwF8jFUQ9Ka97HUrsz4G5Wne4AEhTXo7ANZeQh55HtJU9mnhjRBTDusXbKCw6h6bjyfbHR2y6G7")

  // success
  return res.json({
    id: data.insert_users_one.id,
    token
  })
};

module.exports = handler