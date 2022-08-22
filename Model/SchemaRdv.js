
const mongoose = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));


const SchemaRdv = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  }, 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserSchema",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SchemaDoc",
    required: true,
  },
});


const rdv = mongoose.model("RdvModel", SchemaRdv);

module.exports = {
  
  rdv,
};
