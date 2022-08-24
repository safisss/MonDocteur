const mongoose = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

const SchemaRdv = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = rdv = mongoose.model("RdvModel", SchemaRdv);
