const express = require("express");
const multer = require("multer");
const fs = require("fs");
const dir = "../images";
const path = require("path");

const storage = multer.diskStorage({
 // Où on stock les fichiers

  destination: function (req, file, callback) {
    //Emplacement : utiliser pour déterminer dans quel dossier les fichiers téléchargés doivent être stocker 
    //fonction pour ajouter des nouveaux files sans l'intégrer manuellement
    /************************/
    if (!fs.existsSync(__dirname)) {
      //used to synchronously check if a file already exists in the given path or not  // utilisé pour vérifier de manière synchrone si un fichier existe déjà dans le chemin donné ou non
      fs.mkdirSync(__dirname); //which provides an API for interacting with the file system  // qui fournit une API pour interagir avec le système de fichiers
    }
    callback(null, path.resolve(__dirname, "../images"));
  },
  /***************************/
  filename: function (req, file, callback) {
    // utiliser pour déterminer le nom du fichier dans le dossier
    callback(
      null,
      new Date().toISOString().replace(/:/g, "-") + file.originalname
    ); //Nom du fichier sur PC
  },
});

const fileFilter = (req, file, callback) => {
  //Function to control which files are accepted  // Fonction pour contrôler quels fichiers sont acceptés
  if (
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    "application/pdf"
  ) {
    //mimetype of the file
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const images= multer({ storage: storage, fileFilter: fileFilter }); //Multer is a node.js middleware for handling multipart/form-data, which is used for uploading files. // Multer est un middleware node. js pour la gestion de multipart/form-data, qui est utilisé pour le téléchargement de fichiers.



module.exports = images;
