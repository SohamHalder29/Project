/*-----------Npm Modules------------------------ */
const joi = require("joi");
const { model } = require("mongoose");
/*-----------User Modules---------------------- */
const { emailRegex, userRegex } = require("../constants");

const signUpSchema = joi.object({
  userName: joi.string().required().trim().regex(userRegex),
  email: joi.string().required().trim().email().regex(emailRegex),
  password: joi.string().min(8).required(),
});

module.exports = {
  signUpSchema,
};
