const mongoose = require("mongoose");

require("dotenv").config();
const Mongo_uri = process.env.Mongo_uri;
const ConnexionDb = ()=>{mongoose
  .connect(Mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

} 









module.exports = ConnexionDb;