const jwt = require ("jsonwebtoken");

const secretKey = "My secret My secret My secret Key My secret Key My secret Key 1234 ** My Secret Key"

const options = {
    expiresIn: "1d",
};

const token = (payload) => {
  return jwt.sign(payload, secretKey, options);
}

module.exports = token