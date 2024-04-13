const { userRegex, emailRegex } = require("./data.const");
const {
  Port,
  Host,
  Origins,
  Methods,
  dbName,
  dbUrl,
  accessToken,
  accessTokenExpiry,
  refreshToken,
  refreshTokenExpiry,
} = require("./dotenv.const");

module.exports = {
  userRegex,
  emailRegex,
  Port,
  Host,
  Origins,
  Methods,
  dbName,
  dbUrl,
  accessToken,
  accessTokenExpiry,
  refreshToken,
  refreshTokenExpiry,
};
