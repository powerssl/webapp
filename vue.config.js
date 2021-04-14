const fs = require("fs");

module.exports = {
  devServer: {
    host: "localhost",
    port: 8443,
    https: {
      key: fs.readFileSync("../powerssl/local/certs/localhost-key.pem"),
      cert: fs.readFileSync("../powerssl/local/certs/localhost.pem"),
      ca: fs.readFileSync("../powerssl/local/certs/ca.pem"),
    },
  },
};
