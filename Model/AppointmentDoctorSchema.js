const mongoose = require ("mongoose");
const Joi = require("joi").extend(require("@joi/date"));



const AppointmentDoctorSchema = new mongoose.Schema(
  {
    Descritption: String,
    // appointmentTime: JoiTZ.timezone().required(),
    AppointmentDate: Date,
    AppointmentTime: String,
    
    on_off: { type: Boolean, default: false },
    // User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // doctor: { type: mongoose.Schema.Types.ObjectId, ref: "SchemaDoctor" },
  }
  // { Timestamp: true }
);

const validateRdv = (AppointmentDoctorSchema) => {
  const appointmentValidation = Joi.object({
    User: Joi.string().required(),
    doctor: Joi.string().required(),
    AppointmentType: Joi.string().required(),
    AppointmentTime: Joi.string().required(),
    // appointmentTime: JoiTZ.timezone().required(),
    AppointmentDate: Joi.date().format("YYYY-MM-DD").utc().required(),
  });
  return appointmentValidation.validate(AppointmentDoctorSchema);
};

const AppDocSchema = mongoose.model(
  "AppointmentDocotrSchema",
  AppointmentDoctorSchema
);

module.exports = {
  AppDocSchema,
  validateRdv,
};