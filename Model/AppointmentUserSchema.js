const mongoose = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

// const JoiTimezone = require("joi-tz");
// const JoiTZ = Joi.extend(JoiTimezone);

const AppointmentUserSchema = new mongoose.Schema(
  {
    Description: String,
    // appointmentTime: JoiTZ.timezone().required(),
    AppointmentDate: Date,
    AppointmentTime: String,
    on_off: { type: Boolean, default: false },
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "SchemaDoctor" },
  },
  // { Timestamp: true }
);

const validate = (AppointmentUserSchema) => {
  const appointmentValidation = Joi.object({
    User: Joi.string().required(),
    doctor: Joi.string().required(),
    Description: Joi.string().required(),
    AppointmentTime: Joi.string().required(),
    // appointmentTime: JoiTZ.timezone().required(),
    AppointmentDate: Joi.date().format("YYYY-MM-DD").utc().required(),
  });
  return appointmentValidation.validate(AppointmentUserSchema);
};



const AppUserSchema = mongoose.model( "AppointmentUserSchema", AppointmentUserSchema );

module.exports = 
{
   AppUserSchema, 
   validate,
  }