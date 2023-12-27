import Slider from "react-slick";
import React, { useEffect } from "react";
import $ from "jquery";

export default function MainSlider({ sliders }) {
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
        {sliders.map(({ title, subtitle, items, image }) => (
          <div className="slide-item align-v-h " key={title}>
            <div className="bg-img">
              <img src={image} alt="slide img" />
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                  <div className="slide__content">
                    <h2 className="slide__title">{title}</h2>
                    <p className="slide__desc">{subtitle}</p>
                    <ul className="features-list list-unstyled mb-0 d-flex flex-wrap">
                      {items.map(({ icon, text }, index) => (
                        <li className="feature-item" key={index}>
                          <div className="feature__icon">
                            <i className={icon}></i>
                          </div>
                          <h2 className="feature__title">{text}</h2>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
