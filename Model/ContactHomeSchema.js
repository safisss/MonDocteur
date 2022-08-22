
const mongoose = require("mongoose");

const ContactHomeSchema = ({
  VotreNom: {
    type: String,
  },

  Email: {
    type: String,
  },
  VotreSujet: {
    type: String,
  },

  VotreMessage: {
    type: String,
  }
}
);


const ContactHome = mongoose.model("ContactHome", ContactHomeSchema);

module.exports = ContactHome;