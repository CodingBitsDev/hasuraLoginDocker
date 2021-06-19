const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

console.log("STARTING AT PORT " + PORT)
app.post('/:route', async (req, res) => {
  try{
    const handler = require(`./handlers/${req.params.route}`)
    if (!handler){
      return res.status(404).json({
        message: `not found`
      });
    }
    return handler(req, res);
  } catch(e){
    console.log(e)
    return res.status(500).json({
      message: `unexpected error occured`,
    });
  }
});

app.listen(PORT);
