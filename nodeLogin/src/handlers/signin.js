import { HASURA_HOST, HASURA_PORT, HASURA_SECRET } from "../consts.js"

const fetch = require("node-fetch");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const HASURA_OPERATION = `
query ($email:String!)
{
  users_by_pk(email: $email) {
    email
    id
    name
    password
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch(
    `http://${HASURA_HOST}:${HASURA_PORT}/v1/graphql`,
    {
      method: 'POST',
      headers: {
       'x-hasura-admin-secret' : HASURA_SECRET
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
  const { email, password } = req.body.input;
  let lcEmail = email.toLowerCase();

  // execute the Hasura operation
  const { data, errors } = await execute({ email: lcEmail });

  // if Hasura operation errors, then throw error
  if (errors) {
    return res.status(400).json(errors[0])
  }
  
  let userData = data.users_by_pk; 
  if (!userData){
    return notFoundError(res);
  }
  let passwordRight = await bcrypt.compareSync(userData.email.toLowerCase() + password, userData.password)
  
  if (!passwordRight) return notFoundError(res);
  
  const tokenContents = {
    sub: userData.id.toString(),
    name: userData.name,
    iat: Date.now() / 1000,
    iss: "http://localhost/",
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": userData.id.toString(),
      "x-hasura-default-role": "user",
      "x-hasura-role": "user"
    },
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
  }
  
  const token = jwt.sign(tokenContents, "79s2LqwF8jFUQ9Ka97HUrsz4G5Wne4AEhTXo7ANZeQh55HtJU9mnhjRBTDusXbKCw6h6bjyfbHR2y6G7")

  // success
  console.log({
    id: userData.id,
    token
  })
  return res.json({
    id: userData.id,
    token
  })
};

module.exports = handler

function notFoundError(res){
  return res.status(401).json({
    message: "Email or password wrong",
    code: "401"
  });
}