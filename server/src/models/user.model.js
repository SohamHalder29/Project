const { model } = require("mongoose");
const userSchema = require("../schemas/user.schema");

const userModel = model("User", userSchema);

module.exports = userModel;
