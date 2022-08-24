// const { boolean } = require("joi");
const mongoose = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));
// const isEmpty = require("./isEmpty");
// const validator = require("validator");

const SchemaDoctor = new mongoose.Schema(
  {
    Nom: {
      type: String,
      // required: true,
    },

    Prenom: {
      type: String,
      // required: true,
    },

    AdresseProfessionnelle: {
      type: String,
      // required: true,
    },

    Numerodetelephone: {
      type: Number,
      // required: true,
    },

    Sexe: {
      type: String,
      // required: true,
    },

    Datedenaissance: {
      type: Date,
      // required: true,
    },

    Email: {
      type: String,
      // required: true,
    },

    Motdepasse: {
      type: String,
      // required: true,
    },

    Gouvernorat: {
      type: String,
      // required: true,
    },

    Numerodinscriptionalordredesmedecins: {
      type: Number,
      // required: true,
    },

    Specialites: {
      type: String,
      // required: true,
    },

    img: {
      type: String,
      // required: true,
    },
    // Image: {
    //   type: "string",
    //   // format: "data-url",
    //   format: "jpg",
    // },

    NomCabinet: {
      type: String,
      // required: true,
    },

    NfixduCabinet: {
      type: Number,
      // required: true,
    },

    VerifyAccount: {
      type: String,
      default: "En Attente",
    },

    Role: {
      type: String,
      default: "doctor",
    },
    Messages: [
      {
        message: {
          type: String,
          required: true,
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "UserSchema",
          required: true,
        },
        userNom: {
          type: String,
          required: true,
        },
        userPrenom: {
          type: String,
          required: true,
        },
        phoneNumber: {
          type: Number,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        date: {
          type: String,
          required: true,
        },
      },
    ],
    Calender: [
      {
        title: {
          type: String,
          required: true,
        },
        start: {
          type: Date,
          required: true,
        },
      },
    ],
  },

  { Timestamps: true } //TimesTamps : trace sur database : create + date par exemple
);

const ValidationDoc = (SchemaDoctor) => {
  const doctorValidation = Joi.object({
    Nom: Joi.string(),
    Prenom: Joi.string(),
    Numerodetelephone: Joi.number(),
    Sexe: Joi.string(),
    Datedenaissance: Joi.date().format("YYYY-MM-DD").utc(),
    AdresseProfessionnelle: Joi.string(),
    Email: Joi.string().required(),
    Motdepasse: Joi.string().min(4),
    Gouvernorat: Joi.string(),
    Numerodinscriptionalordredesmedecins: Joi.number(),
    Specialites: Joi.string(),
    img: Joi.string(),
    NomCabinet: Joi.string(),
    NfixduCabinet: Joi.number(),
    // VerifyAccount: Joi.string(),
  });

  return doctorValidation.validate(SchemaDoctor);
};

const UpdateValidatorDoc = (SchemaDoctor) => {
  const doctorUpdateValidation = Joi.object({
    Nom: Joi.string(),
    Prenom: Joi.string(),

    Numerodetelephone: Joi.number(),
    Datedenaissance: Joi.date().format("YYYY-MM-DD").utc(),
    AdresseProfessionnelle: Joi.string(),
    Sexe: Joi.string(),
    Email: Joi.string().required(),
    Motdepasse: Joi.string().min(4).required(),
    Gouvernorat: Joi.string(),
    Numerodinscriptionalordredesmedecins: Joi.number(),
    Specialites: Joi.string(),
    img: Joi.string(),
    NomCabinet: Joi.string(),
    NfixduCabinet: Joi.number(),
    // VerifyAccount: Joi.string(),
  });
  return doctorUpdateValidation.validate(SchemaDoctor);
};

const SchemaDoc = mongoose.model("DoctorModel", SchemaDoctor);

module.exports = {
  ValidationDoc,
  SchemaDoc,
  UpdateValidatorDoc,
};
