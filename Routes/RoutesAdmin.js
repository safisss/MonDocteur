const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {
  User,
  RegistrationValidator,
  UpdateValidator,
} = require("../Model/SchemaUser");
const {
  ValidationDoc,
  SchemaDoc,
  UpdateValidatorDoc,
} = require("../Model/SchemaDoctor");

const {
  Admins,
  RegistrationValidAdmin,
  UpdateValidatorAcoountAdmin,
  LoginValidatorAdmin,
} = require("../Model/SchemaAdmin");

// const AppointmentModel = require("../Model/AppointmentUserSchema");
// const Auth = require("../Middleware/isAuth");

//REGISTER
router.post("/InscriptionAdmin", (req, res) => {
  const {
    Email,
    Motdepasse,
    // Confirmervotremotdepasse,
  } = req.body;
  let { error } = RegistrationValidAdmin(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  User.findOne({ Email }).then((admin) => {
    if (admin) {
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

          const NewAdmin = await Admins.create({
            Email,
            Motdepasse: hash,
          });

          res.status(201).json({
            status: true,
            message: "Account Admin Created",
            data: NewAdmin,
          });
        });
      });
    }
  });
});

///LOGIN

//Login User :

router.post("/Login", async (req, res) => {
  const { Email, Motdepasse } = req.body;

  await Admins.findOne({ Email })

    .then((admin) => {
      if (admin) {
        bcrypt.compare(Motdepasse, admin.Motdepasse, (err, comp) => {
          if (err) {
            return res.status(400).json({ status: false, message: err });
          } else if (comp) {
            jwt.sign(
              { admin },
              process.env.privateKey,
              { expiresIn: "10h" },
              (err, token) => {
                if (err) {
                  return res.status(200).json({ status: false, message: err });
                } else if (token) {
                  return res.status(200).json({
                    status: true,
                    message: "Success to login",
                    token,
                    data: admin,
                  });
                } else if (token) {
                  return res.status(200).json({
                    status: true,
                    message: "You can't acess to login",
                  });
                } else {
                  return res.status(200).json({ status: false, message: err });
                }
              }
            );
          } else if (admin === null) {
            return res
              .status(400)
              .json({ status: true, message: "Invalid Password" });
          }
        });
      } else {
        return res
          .status(404)
          .json({ status: true, message: "Email not existed" });
      }
    })
    .catch((err) => {
      console.log(err);
      // console.log(err.stack);
      res.status(500).json({ status: false, message: err });
    });
});

//Get All Users : List of Users

router.get("/UsersList", async (req, res) => {
  try {
    const allusers = await User.find({});
    res.send({
      status: 200,
      message: "Send list of users Successfully",
      data: allusers,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: `Error: ${error}`,
    });
  }
});

//Add : Admin Create User
router.post("/Create_User", async (req, res) => {
  const { error } = RegistrationValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const Email = await User.findOne({ Email: req.body.Email });
    if (Email) {
      res.send({
        status: 406,
        message: `Email is already Exists`,
      });
    } else {
      const user = await User.create({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Datedenaissance: req.body.Datedenaissance,
        Adresse: req.body.Adresse,
        NTelephone: req.body.NTelephone,
        Email: req.body.Email,
        Motdepasse: req.body.Motdepasse,
        // Confirmervotremotdepasse: req.body.Confirmervotremotdepasse,
      });
      // user.Motdepasse = bcrypt.hashSync(user.Motdepasse, 10);
      // await User.save();
      res.send({
        status: 200,
        message: `Account User Registered Successfully `,
        data: user,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: ` ${error}`,
    });
  }
});

// Admin Update profile Users

router.put("/Update_User/:id", async (req, res) => {
  const { error } = UpdateValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const id = await User.findById(req.params.id);
    if (!id) return res.status(400).send({ message: "ID was not found" });
    const hashPass = bcrypt.hashSync(req.body.Motdepasse, 10);
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Datedenaissance: req.body.Datedenaissance,
        Adresse: req.body.Adresse,
        NTelephone: req.body.NTelephone,
        Email: req.body.Email,
        Motdepasse: hashPass,
        //Confirmervotremotdepasse: req.body.Confirmervotremotdepasse,
      },
      { new: true }
    );
    res.send({
      status: 200,
      message: "Account User Successfully Updated",
      data: updateUser,
    });
  } catch (error) {
    res.send({
      status: 400,
      message: `Error: ${error}`,
    });
  }
});

// Admin : Delete User
router.delete("/Delete_User/:id", async (req, res) => {
  try {
    //const user = await User.findById({ id: req.params.id });
    const user = await User.findById(req.params.id);
    if (user) {
      await User.findByIdAndDelete(req.params.id);
      res.send({
        status: 200,
        message: "Account User Successfully Deleted",
      });
    } else {
      res.send({
        status: 200,
        message: "User does not exists",
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: `Error: ${error}`,
    });
  }
});

//Admin : Get All Doctors :

router.get("/AllDoctors", async (req, res) => {
  try {
    const allDoctors = await SchemaDoc.find({});
    res.send({
      status: 200,
      message: "Send list of doctors Successfully",
      data: allDoctors,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: `Error: ${error}`,
    });
  }
});

//Add : Admin Create Doctor
router.post("/Create_Doctor", async (req, res) => {
  const { error } = ValidationDoc(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const Email = await SchemaDoc.findOne({ Email: req.body.Email });
    if (Email) {
      res.send({
        status: 406,
        message: `Email is already Exists`,
      });
    } else {
      const doctor = await SchemaDoc.create({
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Datedenaissance: req.body.Datedenaissance,
        AdresseProfessionnelle: req.body.AdresseProfessionnelle,
        Numerodetelephone: req.body.Numerodetelephone,
        Sexe: req.body.Sexe,
        Email: req.body.Email,
        Motdepasse: req.body.Motdepasse,
        Gouvernorat: req.body.Gouvernorat,
        Numerodinscriptionalordredesmedecins:
          req.body.Numerodinscriptionalordredesmedecins,
        Specialites: req.body.Specialites,
        AjouterautreSpecialite: req.body.AjouterautreSpecialite,
        NomCabinet: req.body.NomCabinet,
        NfixduCabinet: req.body.NfixduCabinet,
      });

      // doctor.Motdepasse = bcrypt.hashSync(doctor.Motdepasse, 10);
      // await doctor.save();
      res.send({
        status: 200,
        message: `Account Doctor Registered Successfully`,
        data: doctor,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: ` ${error}`,
    });
  }
});

// List of doctors Not validate
router.get("/DoctorsWithoutValidation", async (req, res) => {
  try {
    const allDoctors = await SchemaDoc.find({ VerifyAccount: false });
    res.send({
      status: 200,
      message: "List of doctors without validation Successfully",
      Doctors: allDoctors,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: `Error: ${error}`,
    });
  }
});

//Update VerifyAccount to the doctor : type boolean

// router.put("/ValidateDoctors/:id", async (req, res) => {
//   const { error } = UpdateValidatorDoc(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   try {
//     const id = await SchemaDoc.findById(req.params.id);
//     if (!id) return res.status(400).send({ message: "ID was not found" });
//     // const hashPass = bcrypt.hashSync(req.body.Motdepasse, 10);
//     const UpdateDoctor = await SchemaDoc.findByIdAndUpdate(
//       req.params.id,
//       {
//         // Motdepasse: hashPass,
//         VerifyAccount: true,
//       },
//       { new: true }
//     );
//     res.send({
//       status: 200,
//       message: "Account doctor Verified Successfully",
//       data: UpdateDoctor,
//     });
//   } catch (error) {
//     res.send({
//       status: 400,
//       message: `Error: ${error}`,
//     });
//   }
// });

// Admin Update profile Dctors

router.put("/Update_Doctor/:id", async (req, res) => {
  const { error } = UpdateValidatorDoc(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const id = await SchemaDoc.findById(req.params.id);
    if (!id) return res.status(400).send({ message: "ID was not found" });
    // const hashPass = bcrypt.hashSync(req.body.Motdepasse, 10);
    const UpdateDoctor = await SchemaDoc.findByIdAndUpdate(
      req.params.id,
      {
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Datedenaissance: req.body.Datedenaissance,
        AdresseProfessionnelle: req.body.AdresseProfessionnelle,
        Numerodetelephone: req.body.Numerodetelephone,
        Sexe: req.body.Sexe,
        Email: req.body.Email,
        // Motdepasse: hashPass,
        Gouvernorat: req.body.Gouvernorat,
        Numerodinscriptionalordredesmedecins:
          req.body.Numerodinscriptionalordredesmedecins,
        Specialites: req.body.Specialites,
        AjouterautreSpecialite: req.body.AjouterautreSpecialite,
        NomCabinet: req.body.NomdCabinet,
        NfixduCabinet: req.body.NfixduCabinet,
        ValidateAccount: req.body.ValidateAccount,
      },
      { new: true }
    );
    res.send({
      status: 200,
      message: "Account Doctor is Successfully Updated",
      data: UpdateDoctor,
    });
  } catch (error) {
    res.send({
      status: 400,
      message: `Error: ${error}`,
    });
  }
});

// Admin : Delete Account of Doctor
router.delete("/removeDoctors/:id", async (req, res) => {
  try {
    const doctor = await SchemaDoc.findById(req.params.id);

    if (doctor) {
      await SchemaDoc.findByIdAndDelete(req.params.id);
      res.send({
        status: 200,
        message: "Account Doctor is Successfully Deleted",
      });
    } else {
      res.send({
        status: 200,
        message: "Doctor does not exists",
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: `Error: ${error}`,
    });
  }
});

// Verify ACCOUNT DOCTOR
router.put("/VerifyLoginDoctor/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let doctor = await SchemaDoc.findById(id);
    if (doctor) {
      doctor = await SchemaDoc.findByIdAndUpdate(
        id,
        {
          $set: { VerifyAccount: "Active" },
        },

        { new: true }
      );
      res.send({
        status: 200,
        message: `Doctor verification has been setted to ${doctor.VerifyAccount}`,
      });
    } else {
      res.send({
        status: 400,
        message: `Doctor does not exists`,
      });
    }
  } catch (err) {
    res.send({
      status: 400,
      message: `Error: ${err}`,
    });
  }
});

// Admin : Validate Account of Doctor

// router.post("/Validate_Account", async (req, res) =>{

// })

//GET All Doctors

// router.get("/Admin/allDoctors:id", verify, verifyAdmin, async (req, res) => {
//   try {
//     let Doctors = await SchemaDoc.find();
//     res.status(201).json({ status: true, message: "all Doctors", SchemaDoc });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ status: false, message: "error", error });
//   }
// });

//GET All Users

// router.get("/Admin/ListUsers:id", async (req, res) => {
//   try {
//     let user = await User.find({});
//     res.status(201).json({ status: true, message: "all Users", user });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ status: false, message: "error", error });
//   }
// });

// //GET Users List
// router.get(
//     "/Admin/usersList/:id",
//     verify,
//     verifyAdmin,
//     controller.userManagementController.getUsers.getUserList
// );
// //GET All Doctors

// router.get(
//   "/Admin/allDoctors/:id",
//   verify,
//   verifyAdmin,
//   controller.userManagementController.getUsers.getPostsList
// );
// //GET Reported Posts

// // router.get("/reportedPosts/:id", verify, verifyAdmin, async (req, res) => {
// //     let { id } = req.params;
// //     try {
// //         const reportedPosts = await Posts.find({ isReported: 1 });
// //         // console.log(reportedPosts);
// //         res.status(201).json({
// //             status: true,
// //             message: "reported Posts",
// //             data: reportedPosts,
// //         });
// //     } catch (error) {
// //         res.status(404).json({ status: true, error });
// //     }
// // });
// //GET Valid Doctors

// router.get("/Admin/validDoctor/:id", verify, verifyAdmin, async (req, res) => {
//   let { id } = req.params;
//   try {
//     const validDoctor = await SchemaDoc.find({ isValid: 1 });
//     // console.log(reportedPosts);
//     res.status(201).json({
//       status: true,
//       message: "validDoctor",
//       data: validDoctor,
//     });
//   } catch (error) {
//     res.status(404).json({ status: true, error });
//   }
// });

// //GET All Doctors

// router.get("/Admin/allDoctors:id", verify, verifyAdmin, async (req, res) => {
//   try {
//     let Doctors = await SchemaDoc.find();
//     res.status(201).json({ status: true, message: "all Doctors", SchemaDoc });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ status: false, message: "error", error });
//   }
// });

// //GET All Users

// router.get("/Admin/allUsers:id", verify, verifyAdmin, async (req, res) => {
//   try {
//     let Users = await user.find();
//     res.status(201).json({ status: true, message: "all Users", user });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ status: false, message: "error", error });
//   }
// });

// //GET One User
// router.get(
//     "/utilisateurs/:id",
//     verify,
//     verifyAdmin,
//     controller.userManagementController.getUsers.getUserById
// );
// //GET MESSAGES USERS
// router.get("/messagesUsers/:id", verify, verifyAdmin, async (req, res) => {
//   try {
//     let messages = await Messages.find();
//     res.status(201).json({
//       status: true,
//       message: "Messages",
//       data: messages,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(401).json({ status: false, error });
//   }
// });

// //GET MESSAGES DOCTORS
// router.get("/messagesDoctors/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let messages = await Messages.find();
//         res.status(201).json({
//             status: true,
//             message: "Messages",
//             data: messages,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(401).json({ status: false, error });
//     }
// });
// // ADD Admin
// router.put("/addAdmin/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let newAdmin = await User.findByIdAndUpdate(id, {
//             $set: { isAdmin: true },
//         });
//         res.status(201).json({
//             message: "Admin was added successfully",
//             newAdmin,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// // REMOVE ADMIN
// router.put("/removeAdmin/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let newAdmin = await User.findByIdAndUpdate(id, {
//             $set: { isAdmin: false },
//         });
//         res.status(201).json({
//             message: "Admin was removed",
//             newAdmin,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // ADD Admin
// router.put("/addUser/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let newUser = await User.findByIdAndUpdate(id, {
//             $set: { isUser: true },
//         });
//         res.status(201).json({
//             message: "User was added successfully",
//             newUser,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// // Update User
// router.put("/updateUser/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let newUser = await User.findByIdAndUpdate(id, {
//             $set: { isUser: false },
//         });
//         res.status(201).json({
//             message: "User was updated",
//             newUser,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // ADD Doctor
// router.put("/addDoctor/:id", verify, verifyAdmin, async (req, res) => {
//   try {
//     let id = req.header("data");
//     let newDoctor = await User.findByIdAndUpdate(id, {
//       $set: { isDoctor: true },
//     });
//     res.status(201).json({
//       message: "Doctor was added successfully",
//       newDoctor,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// // Update Doctor
// router.put("/updateDoctor/:id", verify, verifyAdmin, async (req, res) => {
//   try {
//     let id = req.header("data");
//     let newDoctor = await User.findByIdAndUpdate(id, {
//       $set: { isDoctor: false },
//     });
//     res.status(201).json({
//       message: "Doctor was updated",
//       newDoctor,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // ban user
// router.put("/bannedUser/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         // let { id } = req.params;
//         let bannedUser = await User.findByIdAndUpdate(id, {
//             $set: { isUser: false },
//         });
//         res.status(201).json({
//             message: "User was banned",
//             bannedUser,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // unban user
// router.put("/unbanedUser/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         // let { id } = req.params;
//         let unbannedUser = await User.findByIdAndUpdate(id, {
//             $set: { isUser: true },
//         });
//         res.status(201).json({
//             message: "User was unbanned successfully",
//             unbannedUser,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // delete user
// router.delete("/deleteUser/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let deletedUser = await user.findByIdAndRemove(id);
//         res.status(201).json({
//             message: "User was deleted successfully",
//             deletedUser,
//         });
//     } catch (err) {
//         res.status(500).send(err);
//         console.log(err);
//     }
// });
// // delete doctor
// router.delete("/deleteDoctor/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let deletedDoctor = await Doctors.findByIdAndRemove(id);
//         res.status(201).json({
//             message: "Doctor was deleted successfully",
//             deletedDoctor,
//         });
//     } catch (err) {
//         res.status(500).send(err);
//         console.log(err);
//     }
// });
// // delete user message
// router.delete("/deleteMessageUser/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let deletedMsg = await Messages.findByIdAndRemove(id);
//         res.status(201).json({
//             message: "Host was deleted successfully",
//             deletedMsg,
//         });
//     } catch (err) {
//         res.status(500).send(err);
//         console.log(err);
//     }
// });

// // delete doctor message
// router.delete("/deleteMessageDoctor/:id", verify, verifyAdmin, async (req, res) => {
//     try {
//         let id = req.header("data");
//         let deletedMsg = await Messages.findByIdAndRemove(id);
//         res.status(201).json({
//             message: "Message doctor was deleted successfully",
//             deletedMsg,
//         });
//     } catch (err) {
//         res.status(500).send(err);
//         console.log(err);
//     }
// });

module.exports = router;
