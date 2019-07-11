const Express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const generateResponse = require("./generateResponse");
const parseCommand = require("./parseCommand");

const port = process.env.PORT || 3000;

const app = new Express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  generateResponse(parseCommand(req.body))
    .then(result => {
      return res.json(result);
    })
    .catch(console.error);
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
