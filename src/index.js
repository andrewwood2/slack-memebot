const Express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

const generateResponse = require("./generateResponse");
const parseCommand = require("./parseCommand");
const verifySlackToken = require("./verifySlackToken");

const port = process.env.PORT || 3000;

const app = new Express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  if (!verifySlackToken(req)) {
    console.log("failed verify");
    res.statusCode = 404;
    return res;
  }

  generateResponse(parseCommand(req.body))
    .then(result => {
      axios.post(req.body.response_url, result).catch(err => {
        console.log(err);
      });
    })
    .catch(console.error);
  res.statusCode = 200;
  res.end();
  return res;
});

app.get("/internal/healthcheck", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Healthy");
  return res;
});

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
