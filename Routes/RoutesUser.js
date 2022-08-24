const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { SchemaDoc } = require("../Model/SchemaDoctor");
const rdv = require("../Model/SchemaRdv");
const {
  User,
  RegistrationValidator,
  UpdateValidator,
  LoginValidator,
} = require("../Model/SchemaUser");

const isAuth = require("../middleware/isAuth");
const multer = require("multer");

// const ImagesUpload = {
//   UploadImages: path.join(__dirname, "..", "client/public/uploads"),
// };
// const res = require("express/lib/response");

require("dotenv").config();

//const ValidationLogin = require("../Validation/ValidationLogin");

//Inscription User :

router.post("/InscriptionUser", (req, res) => {
  const {
    Nom,
    Prenom,
    Datedenaissance,
    Adresse,
    NTelephone,
    Email,
    Motdepasse,
    // Confirmervotremotdepasse,
  } = req.body;
  let { error } = RegistrationValidator(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  User.findOne({ Email }).then((user) => {
    if (user) {
      res.status(409).json({
        status: true,
        message: "Email already existed",
      });
      // } else if (Motdepasse !== Confirmervotremotdepasse) {
      //   res.status(400).json({ status: true, message: "Password invalid" });
    } else {
      bcrypt.genSalt(10, async (err, salt) => {
        if (err) throw err;
        bcrypt.hash(Motdepasse, salt, async (err, hash) => {
          // Store hash in your password DB.

          if (err) throw err;

          const NewUser = await User.create({
            Nom,
            Prenom,
            Datedenaissance,
            Adresse,
            NTelephone,
            Email,
            Motdepasse: hash,
          });

          res.status(201).json({
            status: true,
            message: "User Created",
            data: NewUser,
          });
        });
      });
    }
  });
});

// catch (err) {
// console.log(err);
// res.status(500).json({status: false, message: err});
//   }

//Login User :

router.post("/Login", async (req, res) => {
  try {
    const { Email, Motdepasse } = req.body;
    // console.log(Email);
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(404).json({
        status: true,
        message:
          "Profile not found, invalid password or email, please check again",
      });
    }
    let comparedPassword = await bcrypt.compare(Motdepasse, user.Motdepasse);
    if (!comparedPassword) {
      return res.status(400).json({
        status: false,
        message:
          "Profile not found, invalid password or email, please check again",
      });
    }
    const token = await jwt.sign({ user }, process.env.privateKey, {
      expiresIn: "48h",
    });
    res.status(200).json({
      status: true,
      message: "Success to login",
      token,
      isUser: user.Role,
      userId: user._id,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
});

//Edit Profile User : + Verify Token

router.put("/UpdateUser", isAuth, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    res.json({
      status: 200,
      msg: "Profile Updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.json({ status: 404, msg: err });
    console.log(err);
  }
});

//USER GET PROFILE
router.get("/myprofile", isAuth, async (req, res) => {
  try {
    let profile = await User.findById(req.user._id);
    res.status(200).json({ status: true, message: "Your profile", profile });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
});

// Find All Doctors :

// router.get("/AllDoctors",  async (req, res) => {
//   try {
//     const Doctors = await SchemaDoc.find({});
//     res.json({ status: 200, message: "All doctors", Doctors, data: Doctors });
//   } catch (err) {
//     res.json({ status: 500, message: err });
//   }
// });

// Find All Doctors :

router.get("/AllDoctors", async (req, res) => {
  try {
    const Doctors = await SchemaDoc.find({});
    res.send({
      status: 200,
      message: "Send list of All doctors Successfully",
      data: Doctors,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: `Error: ${error}`,
    });
  }
});

// Find Doctors by name :

router.get("/find/:Nom", async (req, res) => {
  try {
    const doctorInfo = await SchemaDoc.find({ Nom: req.params.Nom });
    console.log(doctorInfo);
    res.send({
      status: 200,
      message: "Successfull",
      doctorInfo: doctorInfo,
    });
  } catch (err) {
    res.send({
      message: `Error: ${err}`,
    });
  }
});

// User Find Doctors by Specialites :

router.get("/find/Specialites/:spec", async (req, res) => {
  try {
    const docInfo = await SchemaDoc.find({
      Specialites: req.params.spec,
    });

    res.json({
      status: 200,
      message: "Successfull",
      docInfo: docInfo,
    });
  } catch (err) {
    res.send({
      message: `Error: ${err}`,
    });
  }
});

// Find Doctors by Location :
router.get("/find/Gouvernorat/:gouv", async (req, res) => {
  try {
    const doctorInfo = await SchemaDoc.find({
      Gouvernorat: req.params.gouv,
    });
    res.send({
      status: 200,
      message: "Successfull",
      doctorInfo: doctorInfo,
    });
  } catch (err) {
    res.send({
      message: `Error: ${err}`,
    });
  }
});

// Afficher Top doctors : rating

router.get("/TopDoctors", async (req, res) => {
  try {
    const allDoctors = await SchemaDoc.find().limit(5);
    res.send({
      status: 200,
      message: "SuccessFull",
      doctors: allDoctors,
    });
  } catch (error) {
    res.send({
      message: `Error ${error.message}`,
    });
  }
});

//Send message to Admin :

router.post("/ContactAdmin", async (req, res) => {
  let { Nom, Email, Sujet, Message } = req.body;
  const newMessage = new Messages({
    Nom,
    Email,
    Sujet,
    Message,
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json({
      message: "New message is recieved",
      savedMessage,
    });
  } catch (error) {
    res.status(401).json({ status: false, error });
  }
});

//logout:

// router.get("/", (req, res) => {
//   res.localstorage("access_token");
//   return res
//     .status(200)
//     .json({ success: true, SchemaDoc: { email: "", role: "" } });
// }),

///CONTACT DOCTOR : /Users/message/send
router.post("/message/:doctorId", isAuth, async (req, res) => {
  try {
    const { phoneNumber, message, date } = req.body;
    const user = req.user;
    const { doctorId } = req.params;
    // console.log(doctorId);
    const newMessage = await SchemaDoc.findByIdAndUpdate(
      doctorId,
      {
        $push: {
          Messages: {
            message,
            userId: user._id,
            userNom: user.Nom,
            userPrenom: user.Prenom,
            phoneNumber,
            email: user.Email,
            date,
          },
        },
      },
      { new: true }
    );
    console.log(newMessage);
    res.status(200).json({
      status: true,
      message: "Your message was sent successfully",
      newMessage,
    });
  } catch (error) {}
});

///CONTACT DOCTOR : calender
router.post("/calender/:doctorId", isAuth, async (req, res) => {
  try {
    const { start, title } = req.body;
    let { doctorId } = req.params;
    const user = req.user;

    // console.log(req.body);
    const newCalender = await rdv.create(
      {
        userId: user._id,
        doctorId,
        Name: `${user.Nom} ${user.Prenom}`,
        title,
        start,
      },

      { new: true }
    );
    console.log(newCalender);
    res.status(200).json({
      status: true,
      message: "Your message was sent successfully",
      newCalender,
    });
  } catch (error) {}
});

//user get calender doctor

router.get("/calenderOfDoc/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const doctorCalender = await rdv.find({ doctorId: id });
    // .populate(
    //   "Messages.userId",
    //   "Nom Prenom -_id"
    // );
    res.status(200).json({ status: true, data: doctorCalender });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
});

module.exports = router;
