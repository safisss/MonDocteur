const mongoose = require("mongoose");
const Joi = require("joi");

const SchemaAdmin = new mongoose.Schema({
  //   UserName: {
  //     type: String,
  //     required: true,
  //   },

  Email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  Motdepasse: {
    type: String,
    required: true,
  },

  Role: {
    type: String,
    default: "admin",
  },
});

const RegistrationValidAdmin = (SchemaAdmin) => {
  const adminValidation = Joi.object({
    // UserName: Joi.string().required().messages({
    //   "string.empty": "UserName cannot be an empty field",
    //   "string.base": "UserNameshould be a type of text",

    // }),

    Email: Joi.string().min(9).required().messages({
      "string.empty": "Email cannot be an empty field",
      "string.Email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
    Motdepasse: Joi.string().min(8),
  });
  return adminValidation.validate(SchemaAdmin);
};

const UpdateValidatorAcoountAdmin = (SchemaAdmin) => {
  const userUpdateValidation = Joi.object({
    // UserName: Joi.string().required().messages({
    //   "String.empty": " UserName cannot be an empty field",
    //   "string.base": " UserNameshould be a type of text",
    //   "any.required": " UserName is a required field",
    // }),

    Email: Joi.string().min(3).required().messages({
      "string.empty": "Email cannot be an empty field",
      "string.Email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
    Motdepasse: Joi.string().min(8).required(),
  });
  return userUpdateValidation.validate(SchemaAdmin);
};

const LoginValidatorAdmin = (SchemaAdmin) => {
  const adminLoginValidator = Joi.object({
    Email: Joi.string().min(9).required().messages({
      "string.empty": "email cannot be an empty field",
      "string.Email": "email must be a valid email",
      "any.required": "email is a required field",
    }),
    Motdepasse: Joi.string().min(8).required(),
  });
  return adminLoginValidator.validate(SchemaAdmin);
};

const Admins = mongoose.model("AdminSchema", SchemaAdmin); // 1 : UserScema: Nom de table(collection)    //  2 : SchemaAdmin : Nom du schema

module.exports = {
  Admins,
  RegistrationValidAdmin,
  UpdateValidatorAcoountAdmin,
  LoginValidatorAdmin,
};
