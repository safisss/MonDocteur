import React from 'react'

const CardDoc = () => {
  return (
    <div>
      <body>
        <div class="slide-container swiper">
          <div class="slide-content">
            <div class="card-wrapper swiper-wrapper">
              <div class="card swiper-slide">
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src="images/profile1.jpg" alt="" class="card-img" />
                  </div>
                </div>

                <div class="card-content">
                  <h2 class="name">David Dell</h2>
                  <p class="description">
                    The lorem text the section that contains header with having
                    open functionality. Lorem dolor sit amet consectetur
                    adipisicing elit.
                  </p>

                  <button class="button">View More</button>
                </div>
              </div>
              
                <div class="image-content">
                  <span class="overlay"></span>

                  <div class="card-image">
                    <img src="images/profile2.jpg" alt="testtttt" class="card-img" />
                  </div>
                </div>
              </div>
            </div>
          

         
        </div>
      </body>
    </div>
  );
}

export default CardDoc