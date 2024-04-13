const { emailRegex, userRegex } = require("../../constants");
const { signUpSchema } = require("../../helpers/schemaValidator");
const userModel = require("../../models/user.model");
const APIError = require("../../utils/apiError");
const APIResponse = require("../../utils/apiResponse");

const signUp = async function (req, res) {
  try {
    const { value, error } = await signUpSchema.validate(req.body);

    /*-------------if userSchema data set is invalid------------------------ */
    if (error) {
      res.status(400).json(new APIError(400, "Invalid Data set", false, error));
    }

    const { userName, email, password } = value;

    /*-------------if some data filed are empty------------------------ */
    if (!userName || !email || !password) {
      res.status(400).json(new APIError(400, "Some field are empty", false));
    }

    /*-------------if password is less than 8 charecters------------------------ */
    if (password.length < 8) {
      res
        .status(400)
        .json(new APIError(400, "Password must contain 8 charecters", false));
    }

    /*-------------if userName has one uppercase 1 lowercase 1special charecter and 1 number---------------- */
    if (!userRegex.test(userName)) {
      res.status(400).json(new APIError(400, "user Name is invalid", false));
    }

    /*-------------if Email is invalid------------------------ */
    if (!emailRegex.test(email)) {
      res.status(400).json(new APIError(400, "Invalid email address", false));
    }

    /*-------------if user is already exist------------------------ */
    const existUser = await userModel.findOne({ $or: [{ email, userName }] });
    if (existUser) {
      res.status(400).json(new APIError(400, "User is already exist", false));
    }

    /*--------------create new User--------------------------------- */
    const newUser = await userModel.create({
      userName,
      email,
      password,
    });

    await newUser.save();

    return res
      .status(200)
      .json(
        new APIResponse(200, "user is successfully sign up", true, newUser)
      );
  } catch (error) {
    res
      .status(500)
      .json(new APIError(500, "Sign up Process failed", false, error));
  }
};

module.exports = signUp;
