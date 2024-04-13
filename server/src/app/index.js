/*--------------User Modules-----------------------------------*/
const app = require( "./app" );
const { Port, Host } = require("../constants");
const connectionDB = require("../database/connectionDB");

const server = app.listen(Port, Host);

server.on("listening", async function () {
  await connectionDB();
  console.log(`Server is listening on http://${Host}:${Port}`);
});

server.on("error", function (error) {
  console.error(`Server error ${error.name}: ${error.message}`, error);
});
