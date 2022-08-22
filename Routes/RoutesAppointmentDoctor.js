const express = require("express");
const router = express.Router();

const {  AppDocSchema, validateRdv } = require ("../Model/AppointmentDoctorSchema");





// Doctor Get All appointments :

router.get("/Appointments_List", async (req, res) => {
  try {
    const AllAppointments = await AppDocSchema.find();
    console.log(AllAppointments,'doctor');
    res.send({
      status: 200,
      message: "SuccessFull",
      data: AllAppointments,
    });
  } catch (error) {
    res.send({
      status: 400,
      message: `Error: ${error}`,
    });
  }
}); 




// Doctor Delete Appointment

router.delete("/DeleteAppointment/:id", async (req, res) => {
  try {
    const appointment = await AppDocSchema.findById({ id: req.params.id });

    if (appointment) {
      await AppDocSchema.findByIdAndDelete(req.params.id);
      res.send({
        status: 200,
        message: "Appointment Successfully Deleted",
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

//ADD RDV :


router.post("/makeAppointmentDr", async (req, res) => {
  const { error } = validateRdv(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  try {
    const appointment = await AppDocSchema.create({ ...req.body });
    
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





    /// GET DOCTOR DATE APPOintement
  router.get("/getAppDate", (req,res)=>{
        AppUserSchema.find({doctorId:req.params.id},'-_id date').exec((err, AppointmentDate) => {
            if (err) {
                console.log(err)
                res.json({ message: 'error get all appointments' + err, data: null, status: 500 })
            }
            else {
                console.log(moment.utc(AppointmentDate.date).format())
                res.send(AppointmentDate)

            }
        })
      }),






// GET USER APPOINTEMENT FOR DOCTOR
    router.get("/getUserApp",(req, res)=> {
        
        AppUserSchema.find({doctorId : req.params.id}, 'userId')
        .populate('userId')
        .exec((err,appointment)=>{
           // console.log("app", appointment)
            
            if (err) {
                res.json({ message: 'error get one appointment' + err, data: null, status: 500 })
             
            }
            else {
             
                const id = appointment.map(o => o.id)
                const filtered = appointment.filter(({id}, index) => !id.includes(id, index + 1))

                console.log("result", filtered)
                res.json({ data: appointment, status: 200 })
               

            }
        })
      }),



module.exports = router;