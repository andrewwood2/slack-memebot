const crypto = require("crypto");
const qs = require("qs");
require("dotenv").config();

function verifySlackToken(req) {
  const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
  const xSlackReqTimestamp = req.headers["x-slack-request-timestamp"];
  const xSlackSignature = req.headers["x-slack-signature"];
  let requestBody = qs.stringify(req.body, { format: "RFC1738" });
  const basestring = "v0:" + xSlackReqTimestamp + ":" + requestBody;
  signature =
    "v0=" +
    crypto
      .createHmac("sha256", slackSigningSecret)
      .update(basestring, "utf8")
      .digest("hex");
  return signature === xSlackSignature;
}

module.exports = verifySlackToken;
