const express = require("express");
const router = express.Router();

const ContactHome = require("../Model/ContactHomeSchema");





router.post("/contact/SendMessage", async (req, res) => {
      const VotreNom = req.body.VotreNom;
      const Email = req.body.Email;
      const VotreSujet = req.body.VotreSujet;
      const VotreMessage = req.body.VotreMessage;
      const newContactHome = new ContactHome ({
        VotreNom,
        Email,
        VotreSujet,
        VotreMessage

      });

      newContactHome.save();

    });




    router.get("/contact/Message", async (req, res) => {
    ContactHome.find().then((foundContactHome) => res.data(foundContactHome));

    });

    module.exports = router;