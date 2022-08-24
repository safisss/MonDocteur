import React from "react";
import "./homeProfil.css";

const Profil = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>Mes Photos</span> Gallery
      </h2>

      <div className="imgGallery">
        <div id="all_gallery">
          <div className="Gallery">
            <img
              src="images/Home/imggggg.png"
              alt=""
              style={{ width: "309px", height: "278px" }}
            />
            <div className="descGallery">
              <p>Neurologue</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/pic2.jpg"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>Pédiatre</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/pic3.jpg"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>ORL</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/pic4.jpg"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>Médecin généraliste</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/pic1.jpg"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>Sage femme</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/worker.png"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>Dermatologue et vénérologue</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/docc.png"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>Gynécologue médicale et obstétrique</p>
            </div>
          </div>

          <div className="Gallery">
            <img
              src="images/Home/pic133.jpg"
              alt=""
              style={{ width: "309px", height: "278px" }}
              className="GalleryPhotos"
            />
            <div className="descGallery">
              <p>Dentiste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
