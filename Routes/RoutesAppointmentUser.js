const { AppUserSchema, validate } = require("../Model/AppointmentUserSchema");
//const Auth = require("../middleware/isAuth");
const express = require("express");
const router = express.Router();

//router.use(Auth);



 

//Add appointment User
router.post("/makeAppointment", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    const appointment = await AppUserSchema.create({ ...req.body });
    res.send({
      status: 200,
      message: "SuccessFull",
      Data: appointment,
    });
  } catch (error) {
    res.send({
      status: 404,
      message: `Error : ${error}`,
    });
  }
});




// Afficher Rdv User
router.get("/userAppointment/:id", async (req, res) => {
  try {
    const userAppointment = await AppUserSchema.find({
      user: req.params.id,
    }).populate({
      path: "doctor", //A vérifierrrrrrrrrrr
      model: "DoctorModel",
    });
    res.send({
      status: 200,
      message: "SuccessFull",
      Appointments: userAppointment,
    });
  } catch (error) {
    res.send({
      status: 400,
      message: `Error: ${error}`,
    });
  }
});




// Doctor Get All appointments :

// router.get("/", async (req, res) => {
//   try {
//     const AllAppointments = await AppointmentModel.find();
//     res.send({
//       status: 200,
//       message: "SuccessFull",
//       Appointments: AllAppointments,
//     });
//   } catch (error) {
//     res.send({
//       status: 400,
//       message: `Error: ${error}`,
//     });
//   }
// }); 





// Delete Appointment User

router.delete("/DeleteAppointment/:id", async (req, res) => {
  try {
    const appointment = await AppUserSchema.findById({ id: req.params.id });

    if (appointment) {
      await AppUserSchema.findByIdAndDelete(req.params.id);
      res.send({
        status: 200,
        message: "Successfully Deleted",
      });
    } else {
      res.send({
        status: 200,
        message: "Appointment does not exists",
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      message: `Error : ${error}`,
      Appointment: deleteAppointment,
    });
  }
});






     // Cancel Appointement:

   cancelAppointement: (req, res) => {
     AppUserSchema.findOneAndUpdate(
       { _id: req.params.id },
       { cancel: true },
       { new: true },
       (err, appointment) => {
         if (err) {
           res.status(500).json({
             message: "appointment not cancel ",
             data: null,
           });
         } else {
           res.status(200).json({
             message: "appointment cancel successfuly ",
           });
         }
       }
     );
   }




     // updateappointmentById:

     (req, res) => {
       console.log(req.body, req.params);
       AppUserSchema.findOneAndUpdate(
         { _id: req.params.id },
         req.body,
         { new: true },
         (err, appointment) => {
           if (err) {
             res.status(500).json({
               message: "appointment not updated ",
               data: null,
             });
           } else {
             console.log(appointment);
             res.status(200).json({
               message: "appointment updated successfuly ",
               data: req.body,
             });
           }
         }
       );
     }











     module.exports = router;
