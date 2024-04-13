/*-----------------------Regular Expression-----------------------------------------------*/
const emailRegex = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
const userRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).{8,}$");

module.exports = {
  emailRegex,
  userRegex,
};
