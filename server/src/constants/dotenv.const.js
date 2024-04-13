/*----------Npm Modules--------------------------------*/
const dotEnv = require( "dotenv" );
dotEnv.config({ path: ".env" });

/*---------Server Host and Port------------------------*/
const Port = process.env?.PORT;
const Host = process.env?.HOST;

/*---------Cross Origins Policy------------------------*/
const Origins = process.env?.ORIGIN;
const Methods = process.env?.METHODS;

/*---------Database name and url-----------------------*/
const dbName = process.env?.DB_NAME;
const dbUrl = process.env?.DB_URL;

/*---------Access Token--------------------------------*/
const accessToken = process.env?.ACCESS_TOKEN_SECRET;
const accessTokenExpiry = process.env?.ACCESS_TOKEN_EXPIRY;

/*---------Refresh Token-------------------------------*/
const refreshToken = process.env?.REFRESH_TOKEN_SECRET;
const refreshTokenExpiry = process.env?.REFRESH_TOKEN_EXPIRY;

module.exports = {
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
