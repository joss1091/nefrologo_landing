import Slider from "react-slick";
import React, { useEffect } from 'react';
import $ from 'jquery';

export default function MainSlider({}) {
  const settings = {
    dots: false,
    speed: 700,
    infinite: true,
    fade: true,
    arrows: true,
    slidesToShow: 1,
    cssEase: "linear",
    draggable: true,
  };

  return (
    <section className="slider">
      <Slider {...settings} className="slick-carousel m-slides-0">
        <div className="slide-item align-v-h " >
          <div className="bg-img">
            <img
              src="https://7oroof.com/demos/medcity/assets/images/sliders/2.jpg"
              alt="slide img"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <h2 className="slide__title">Providing Best Medical Care</h2>
                  <p className="slide__desc">
                    The health and well-being of our patients and their health
                    care team will always be our priority, so we follow the best
                    practices for cleanliness.
                  </p>
                  <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart"></i>
                      </div>
                      <h2 className="feature__title">Examination</h2>
                    </li>

                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-medicine"></i>
                      </div>
                      <h2 className="feature__title">Prescription </h2>
                    </li>

                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart2"></i>
                      </div>
                      <h2 className="feature__title">Cardiogram</h2>
                    </li>
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-blood-test"></i>
                      </div>
                      <h2 className="feature__title">Blood Pressure</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item align-v-h">
          <div className="bg-img">
            <img
              src="https://7oroof.com/demos/medcity/assets/images/sliders/2.jpg"
              alt="slide img"
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="slide__content">
                  <h2 className="slide__title">
                    All Aspects Of Medical Practice
                  </h2>
                  <p className="slide__desc">
                    The health and well-being of our patients and their health
                    care team will always be our priority, so we follow the best
                    practices for cleanliness.
                  </p>
                  <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart"></i>
                      </div>
                      <h2 className="feature__title">Examination</h2>
                    </li>

                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-medicine"></i>
                      </div>
                      <h2 className="feature__title">Prescription </h2>
                    </li>

                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-heart2"></i>
                      </div>
                      <h2 className="feature__title">Cardiogram</h2>
                    </li>

                    <li className="feature-item">
                      <div className="feature__icon">
                        <i className="icon-blood-test"></i>
                      </div>
                      <h2 className="feature__title">Blood Pressure</h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
