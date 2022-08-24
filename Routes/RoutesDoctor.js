const express = require("express");
const jwt = require("jsonwebtoken");
const doctorAuth = require("../middleware/doctorAuth");
const rdv = require("../Model/SchemaRdv");

const router = express.Router();
// const router = require("express").Router();
const bcrypt = require("bcryptjs");
const {
  ValidationDoc,
  SchemaDoc,
  UpdateValidatorDoc,
} = require("../Model/SchemaDoctor");
// const ValidateLogin = require("../Validation/ValidationLogin");
const ValidationLogin = require("../Validation/ValidationLogin");

require("dotenv").config();
const multer = require("multer");
const path = require("path");
const { Console } = require("console");

//multer
const fileUploadPaths = {
  FILE_UPLOAD_PATH: path.join(__dirname, "..", "Client/public/uploads"),
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileUploadPaths.FILE_UPLOAD_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.toLowerCase().replace(/ /g, "_"));
  },
});

const postFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploadPost = multer({
  storage: storage,
  fileFilter: postFilter,
});

// const DoctorModel = require('../Model/SchemaDoctor');
// const multer = require('multer');

//Upload image
// var storage = multer.diskStorage({
// destination: function(req, file, cb) {
//   cb(null, './uploads');
// },
// filename: function(req, file, cb){
//   cb(null, file.filename + "_"+ "_"+ fileoriginalname);
// },

// });

// var upload = multer({
//   storage:storage,
// }).single("image");

// const nodemailer = require("nodemailer");
// const {version4 : uuidv4} = require("uuid");
// const bcrypt = require("bcryptjs");

//const DoctorVerification = require("../Model/DoctorVerification");

//const Auth = require("../middleware/isAuth");
//const VerifyAccount = require("../middleware/VerifyAccount");

// router.use(Auth);

// Doctor Get All appointments
router.get("/Appointments_List", async (req, res) => {
  try {
    const AllAppointments = await AppUserSchema.find({});
    res.json({
      status: 200,
      message: "SuccessFull",
      data: AllAppointments,
    });
  } catch (error) {
    res.json({
      status: 400,
      message: `Error: ${error}`,
    });
  }
});

//Post : Create doctor : Registration : Inscription : THe original

// router.post("/InscriptionDoctor", async (req, res) => {
//   const { error } = ValidationDoc(req.body);
//   if (error) return res.status(404).json(error.details[0].message);
//    try {
//      const InscriptionDoctor = await SchemaDoc.create({ ...req.body });
//     res.json({
//       status: 200,
//       message: "Successfull Registration ",
//       data: InscriptionDoctor,
//     });
//   } catch (error) {
//     res.json({
//       status: 400,
//       message: `Error ${error.message}`,
//     });
//   }
// });

//Create Acoount Doctor : A vérifierrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

router.post(
  "/InscriptionDoctor",
  uploadPost.single("img"),
  async (req, res) => {
    // const { error } = ValidationDoc(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    console.log(req.file);
    try {
      let { Email, Motdepasse } = req.body;
      const doc = await SchemaDoc.findOne({ Email });
      if (doc) {
        res.send({
          status: 406,
          message: `Email is already Exists`,
        });
      } else {
        let salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Motdepasse, salt);
        const doctor = new SchemaDoc({
          Nom: req.body.Nom,
          Prenom: req.body.Prenom,
          Datedenaissance: req.body.Datedenaissance,
          AdresseProfessionnelle: req.body.AdresseProfessionnelle,
          Numerodetelephone: req.body.Numerodetelephone,
          Sexe: req.body.Sexe,
          Email: req.body.Email,
          Motdepasse: hashedPassword,
          Gouvernorat: req.body.Gouvernorat,
          Numerodinscriptionalordredesmedecins:
            req.body.Numerodinscriptionalordredesmedecins,
          Specialites: req.body.Specialites,
          // img: req.body.img,
          img: `${req.file.filename}`,
          NomCabinet: req.body.NomCabinet,
          NfixduCabinet: req.body.NfixduCabinet,
          // AccountVerify: false,
        });
        await doctor.save();
        // .then((result) => {
        //   send(result, res);
        // })
        res.json({
          status: 200,
          //  return res.status(200).json ({
          message: `Your Account as a Doctor is Registered Successfully`,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: false,
        message: ` ${error}`,
      });
    }
  }
);

//Create Acoount Doctor : A vérifierrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

// router.post("/InscriptionDoctor", uploadPost.single("img"), async (req, res) => {
//   const { error } = ValidationDoc(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   try {
//     const Email = await SchemaDoc.findOne({ Email: req.body.Email });
//     if (Email) {
//       res.send({
//         status: 406,
//         message: `Email is already Exists`,
//       });
//     } else {
//       const doctor = new SchemaDoc({
//         Nom: req.body.Nom,
//         Prenom: req.body.Prenom,
//         Datedenaissance: req.body.Datedenaissance,
//         AdresseProfessionnelle: req.body.AdresseProfessionnelle,
//         Numerodetelephone: req.body.Numerodetelephone,
//         Sexe: req.body.Sexe,
//         Email: req.body.Email,
//         Motdepasse: req.body.Motdepasse,
//         Gouvernorat: req.body.Gouvernorat,
//         Numerodinscriptionalordredesmedecins:
//           req.body.Numerodinscriptionalordredesmedecins,
//         Specialites: req.body.Specialites,
//         // img: req.body.img,
//         img: `${fileName}`,
//         NomCabinet: req.body.NomCabinet,
//         NfixduCabinet: req.body.NfixduCabinet,

//         // AccountVerify: false,
//       });

//       doctor.Motdepasse = bcrypt.hashSync(doctor.Motdepasse, 10);
//       await doctor
//         .save()
//         // .then((result) => {
//         //   send(result, res);
//         // })

//         res.json({
//           status: 200,
//           //  return res.status(200).json ({
//           message: `Your Account as a Doctor is Registered Successfully`,
//         });

//     }
//   } catch (error) {
//     console.log(error)
//     // res.json({
//     //   status: 400,
//     //   message: ` ${error}`,
//     // });
//   }
// });

// Login Doctor : /Doctors/Login

router.post("/Login", async (req, res) => {
  try {
    const { Email, Motdepasse } = req.body;
    let doctor = await SchemaDoc.findOne({ Email });
    console.log(doctor);
    if (!doctor) {
      return res.status(401).json({
        status: false,
        message:
          "Profile not found, invalid password or email, please check again",
      });
    }
    let checkPassword = await bcrypt.compare(Motdepasse, doctor.Motdepasse);
    console.log(checkPassword);
    if (!checkPassword) {
      // console.log("err");
      return res.status(402).json({
        status: false,
        message:
          "Profile not found, invalid password or email, please check again",
      });
    }
    if (doctor.VerifyAccount.includes("En Attente")) {
      return res.status(403).json({
        status: false,
        notVerified: true,
        message: "Your account is not verified yet!",
      });
    }
    let token = await jwt.sign({ doctor }, process.env.privateKey);

    res.status(200).json({
      status: true,
      message: "Success to login",
      token,
      isDoctor: doctor.Role,
      doctorId: doctor._id,
      verify: doctor.VerifyAccount,
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }

  // await SchemaDoc.findOne({ Email })
  //   .then((doctor) => {
  //     if (doctor) {
  //       bcrypt.compare(Motdepasse, doctor.Motdepasse, (err, comp) => {
  //         if (err) {
  //           return res
  //             .status(401)
  //             .json({ status: false, message: "wrong password" });
  //         } else if (comp) {
  //           jwt.sign({ doctor }, process.env.privateKey, (err, token) => {
  //             if (err) {
  //               return res.status(200).json({ status: false, message: err });
  //             } else if (token) {
  //               return res.status(200).json({
  //                 status: true,
  //                 message: "Success to login",
  //                 token,
  //                 isDoctor: doctor.Role,
  //                 verity: doctor.VerifyAccount,
  //               });
  //             } else if (token && doctor.VerifyAccount.includes("En Attente")) {
  //               return res.status(200).json({
  //                 status: true,
  //                 message: "You can't acess to login",
  //               });
  //             } else {
  //               return res.status(200).json({ status: false, message: err });
  //             }
  //           });
  //         } else if (doctor === null) {
  //           return res
  //             .status(400)
  //             .json({ status: true, message: "Invalid Password" });
  //         }
  //       });
  //     } else {
  //       return res
  //         .status(404)
  //         .json({ status: true, message: "Email not existed" });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     // console.log(err.stack);
  //     res.status(500).json({ status: false, message: "error" });
  //   });
});

// Login Doctor :      A vérifierrrrrrrrrrrrrrrrrrrrrrrrrrrr

// router.post("/Login", VerifyAccount, async (req, res) => {
//   const { Email, Motdepasse} = req.body;

//           await SchemaDoc.findOne({ Email })
//     .then((doctor) => {
//       if (doctor) {
//         bcrypt.compare(Motdepasse, doctor.Motdepasse, (err, comp) => {
//           if (err) {
//             res.status(200).json({ status: false, message: err });
//           } else if (comp) {
//            jwt.sign(
//              { doctor, VerifyAccount }, process.env.privateKey, (err, token) => {
//                if (err) {
//                  res.status(200).json({ status: false, message: err });
//                } else if (token === true && VerifyAccount === true) {
//                  const token = jwt.sign({ doctor, VerifyAccount }, privateKey);

//                  res.status(200).json({ status: true, message: "Success to login", data: token, });
//                } else if (token === true && VerifyAccount === false) {
//                  res.status(200).json({
//                    status: true,
//                    message: "You can't acess to login",
//                  });
//                } else {
//                  res.status(200).json({ status: false, message: err });
//                }
//              }
//            );
//           } else {

//             res.status(400).json({ status: true, message: "Invalid Password" });
//           }
//         });
//       } else {
//         res.status(404).json({ status: true, message: "Email not existed" });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log(err.stack);
//       res.status(500).json({ status: false, message: err });
//     });
// });

// Put : Doctor Update his profile by ID :

// router.put("/UpdateDoctor/:id", async (req, res) => {
//   const { error } = UpdateValidatorDoc(req.body);
//   if (error) return res.status(404).json(error.details[0].message);
//   try {
//     await SchemaDoc.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.json({
//       status: 200,
//       message: "Account Doctor Successfully Updated",
//     });
//   } catch (error) {
//     res.json({
//       status: 404,
//       message: `Error: ${error}`,
//     });
//   }
// });

// UPDATE PROFILE DOCTOR:

router.put("/UpdateDoctor", doctorAuth, async (req, res) => {
  try {
    const updatedDoctor = await SchemaDoc.findByIdAndUpdate(
      req.doctor._id,
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
      data: updatedDoctor,
    });
  } catch (err) {
    res.json({ status: 404, msg: err });
    console.log(err);
  }
});

//doctor GET PROFILE :

router.get("/myprofile", doctorAuth, async (req, res) => {
  try {
    let profile = await SchemaDoc.findById(req.doctor._id);
    res.status(200).json({ status: true, message: "Your profile", profile });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
});

//Contacter Admin : message to Admin :

router.post("/DrContactAdmin", doctorAuth, async (req, res) => {
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

//LOGGGGGG :
// router.post("/Logg", async (req, res) => {
//   const { errors } = ValidationLogin(req.body);
//   try {
//     if (!VerifyAccount) {
//       res.status(404).json(errors);
//     } else {
//       SchemaDoc.findOne({ Email: req.body.Email }).then((doctor) => {
//         if (!doctor) {
//           errors.Email = "not found doctor";
//           res.status(404).json(errors);
//         } else {
//           bcrypt
//             .compare(req.body.Motdepasse, doctor.Motdepasse)
//             .then((isMatch) => {
//               if (!isMatch) {
//                 errors.Motdepasse = "incorrect entry Email or password invalid";
//                 res.status(404).json(errors);
//               } else {
//                 var token = jwt.sign(
//                   {
//                     id: doctor._id,
//                     Email: doctor.Email,
//                     Motdepasse: doctor.Motdepasse,
//                     Role: doctor.Role,
//                   },
//                   process.env.PRIVATE_KEY,
//                   { expiresIn: "1h" }
//                 );
//                 res.status(200).json({
//                   message: "success",
//                   token: "Bearer " + token,
//                 });
//               }
//             });
//         }
//       });
//     }
//   } catch (error) {
//     res.status(404).json(error.message);
//   }
// });

//logout:

// router.get("/", (req, res) => {
//   res.localstorage("access_token");
//   return res.status(200).json({ success: true, user: { email: "", role: "" } });
// }),

// Doctor get messages
router.get("/messages", doctorAuth, async (req, res) => {
  try {
    let { _id } = req.doctor;

    const user = await SchemaDoc.findById(_id);

    // .populate(
    //   "Messages.userId",
    //   "Nom Prenom -_id"
    // );
    // console.log(user.Messages);
    res.status(200).json({ status: true, messages: user.Messages });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
});

// Doctor get calender
router.get("/calender", doctorAuth, async (req, res) => {
  try {
    let { _id } = req.doctor;
    const calender = await rdv.find({ doctorId: _id });
    // console.log(calender);
    res.status(200).json({ status: true, calender });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ status: false, error });
  }
});

module.exports = router;
