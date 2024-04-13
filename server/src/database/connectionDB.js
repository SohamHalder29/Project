const { default: mongoose } = require("mongoose");
const { dbUrl, dbName } = require("../constants");

async function connectionDB() {
  try {
    const dbInstance = await mongoose.connect(`${dbUrl}/${dbName}`);
    console.log(`Database connected ${dbInstance.connection.host}`);
  } catch (error) {
    console.error(`Database error ${error.name} : ${error.message}\n`, error);
  }
}

module.exports = connectionDB;
