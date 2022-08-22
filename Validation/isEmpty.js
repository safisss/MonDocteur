//req.body.Email
const isEmpty = (value) =>
  value === null ||
  value === undefined ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "String" && value.trim().length === 0);



  //si l'un de ces 4 est disponible donc document non valide
module.exports = isEmpty;






