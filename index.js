const express = require("express");
const cors = require("cors");
const app = express();
// import multer from "multer";

const Port = process.env.Port || 5000;
const ConnexionDb = require("./Config/ConnexionDb");

app.use(express.json());
// app.use(express.urlencoded({
//     extended: false}));
app.use(cors());

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//   },
// });

// var upload = multer({ storage: storage });

ConnexionDb();

// app.use("/uploads", express.static("./uploads"));

app.use("/Users", require("./Routes/RoutesUser"));

app.use("/Admin", require("./Routes/RoutesAdmin"));

app.use("/Appointments", require("./Routes/RoutesAppointmentUser"));

app.use("/AppointmentsDoc", require("./Routes/RoutesAppointmentDoctor"));

app.use("/Doctor", require("./Routes/RoutesAppointmentUser"));

app.use("/Doctors", require("./Routes/RoutesDoctor"));

app.use("/contact", require("./Routes/ContactHomeRoute"));

// gérer les erreurs :

app.use(function (err, req, res, next) {
  console.log(err);
  if (err.status === 404) res.status(404).json({ message: " Path Not found" });
  else res.status().json({ message: "Something looks wrong ! 500 " });
});

// const users = require("./Routes/RoutesUser");

// // use routes
// app.use("/users", users);

app.listen(Port, (err) => {
  if (err) throw err;

  console.log(`Server Started at ${Port}`);
});
