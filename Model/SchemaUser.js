const mongoose = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

const SchemaUser = new mongoose.Schema({
  Nom: {
    type: String,
    required: true,
  },

  Prenom: {
    type: String,
    required: true,
  },

  Datedenaissance: {
    type: Date,
    required: true,
  },
  Adresse: {
    type: String,
    required: true,
  },

  NTelephone: {
    type: Number,
    required: true,
  },

  Email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  Motdepasse: {
    type: String,
  },

  Role: {
    type: String,
    default: "user",
  },
});

const RegistrationValidator = (SchemaUser) => {
  const userValidation = Joi.object({
    Nom: Joi.string().required().messages({
      "string.empty": "Nom cannot be an empty field",
      "string.base": "Nom should be a type of text",
      // "any.required": "Nom is a required field",
    }),
    Prenom: Joi.string().min(3).required().messages({
      "string.empty": "Prenom cannot be an empty field",
      "string.base": "Prenom should be a type of text",
      // "any.required": "Prenom is a required field",
    }),
    Datedenaissance: Joi.date().format("YYYY-MM-DD").utc().required().messages({
      "date.empty": "Year cannot be an empty field",
      // "any.required": "Year is a required field",
    }),
    Adresse: Joi.string().min(3).required().messages({
      "string.empty": "Adresse cannot be an empty field",
      // "any.required": "Adresse is a required field",
    }),
    NTelephone: Joi.number().min(3).required().messages({
      "string.empty": "PhoneNumber cannot be an empty field",
      // "any.required": "PhoneNumber is a required field",
    }),
    Email: Joi.string().min(9).required().messages({
      "string.empty": "Email cannot be an empty field",
      "string.Email": "Email must be a valid email",
      // "any.required": "Email is a required field",
    }),
    Motdepasse: Joi.string().min(8),

    // Confirmervotremotdepasse: Joi.string().min(8),
  });
  return userValidation.validate(SchemaUser);
};

const UpdateValidator = (SchemaUser) => {
  const userUpdateValidation = Joi.object({
    Nom: Joi.string().required().messages({
      "String.empty": "Nom cannot be an empty field",
      "string.base": "Nom should be a type of text",
      "any.required": "Nom is a required field",
    }),
    Prenom: Joi.string().min(3).required().messages({
      "string.empty": "Prenom cannot be an empty field",
      "string.base": "Prenom should be a type of text",
      "any.required": "Prenom is a required field",
    }),
    Datedenaissance: Joi.date().format("YYYY-MM-DD").utc().required().messages({
      "date.empty": "Year cannot be an empty field",
      "any.required": "Year is a required field",
    }),
    Adresse: Joi.string().min(3).required().messages({
      "string.empty": "Adresse cannot be an empty field",
      "any.required": "Adresse is a required field",
    }),
    NTelephone: Joi.number().min(3).required().messages({
      "string.empty": "PhoneNumber cannot be an empty field",
      "any.required": "PhoneNumber is a required field",
    }),
    Email: Joi.string().min(3).required().messages({
      "string.empty": "Email cannot be an empty field",
      "string.Email": "Email must be a valid email",
      "any.required": "Email is a required field",
    }),
    Motdepasse: Joi.string().min(8).required(),
    // Confirmervotremotdepasse: Joi.string().min(8),
  });
  return userUpdateValidation.validate(SchemaUser);
};

const LoginValidator = (SchemaUser) => {
  const userLoginValidator = Joi.object({
    Email: Joi.string().min(9).required().messages({
      "string.empty": "email cannot be an empty field",
      "string.email": "email must be a valid email",
      "any.required": "email is a required field",
    }),
    Motdepasse: Joi.string().min(8).required(),
  });
  return userLoginValidator.validate(SchemaUser);
}; 

const User = mongoose.model("UserSchema", SchemaUser); // 1 : UserScema: Nom de table(collection)    //  2 : SchemaUser : Nom du schema

module.exports = {
  User,
  RegistrationValidator,
  UpdateValidator,
  LoginValidator,
};
