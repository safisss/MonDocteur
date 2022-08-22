                        
const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Motdepasse = !isEmpty(data.Motdepasse) ? data.Motdepasse : "";

  if (!validator.isEmail(data.Email)) {
    errors.Email = "Format Email required";
  }

  if (validator.isEmpty(data.Email)) {
    errors.Email = "Required Email";
  }

  if (validator.isEmpty(data.Motdepasse)) {
    errors.Motdepasse = "Required Motdepasse";
  }

  return {
    errors,
    AccountVerify: isEmpty(errors),
  };

};
