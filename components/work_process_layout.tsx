import Slider from "react-slick";

export default function WorkProcessLayout({  }) {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 3
        }
      }, 
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2
        }
      }, 
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 2
        }
      }, 
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="work-process work-process-carousel pt-130 pb-0 bg-overlay bg-overlay-secondary">
      <div className="bg-img"><img src="https://7oroof.com/demos/medcity/assets/images/banners/1.jpg" alt="background" /></div>
      <div className="container">
        <div className="row heading-layout2">
          <div className="col-12">
            <h2 className="heading__subtitle color-primary">Caring For The Health Of You And Your Family.</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
            <h3 className="heading__title color-white">We Provide All Aspects Of Medical Practice For Your Whole Family!
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1">
            <p className="heading__desc font-weight-bold color-gray mb-40">We will work with you to develop individualised
              care
              plans, including
              management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of
              practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
            </p>
            <ul className="list-items list-items-layout2 list-items-light list-horizontal list-unstyled">
              <li>Fractures and dislocations</li>
              <li>Health Assessments</li>
              <li>Desensitisation injections</li>
              <li>High Quality Care</li>
              <li>Desensitisation injections</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="carousel-container mt-90">
              <Slider {...settings} className="slick-carousel">
                
                <div className="process-item">
                  <span className="process__number">01</span>
                  <div className="process__icon">
                    <i className="icon-health-report"></i>
                  </div>
                  <h4 className="process__title">Fill In Our Medical Application</h4>
                  <p className="process__desc">Medcity offers low-cost health coverage for adults with limited income, you
                    can
                    enroll.</p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Doctors’ Timetable</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="process-item">
                  <span className="process__number">02</span>
                  <div className="process__icon">
                    <i className="icon-dna"></i>
                  </div>
                  <h4 className="process__title">Review Your Family Medical History</h4>
                  <p className="process__desc">Regular health exams can help find all the problems, also can find it early
                    chances.</p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Start A Check Up</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
                <div className="process-item">
                  <span className="process__number">03</span>
                  <div className="process__icon">
                    <i className="icon-medicine"></i>
                  </div>
                  <h4 className="process__title">Choose Between Our Care Programs</h4>
                  <p className="process__desc">We have protocols to protect our patients while continuing to provide
                    necessary
                    care.</p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Explore Programs</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
                
                <div className="process-item">
                  <span className="process__number">04</span>
                  <div className="process__icon">
                    <i className="icon-stethoscope"></i>
                  </div>
                  <h4 className="process__title">Introduce You To Highly Qualified Doctors</h4>
                  <p className="process__desc">Our administration and support staff have exceptional skills and trained to
                    assist you. </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Meet Our DocStors</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
            
                <div className="process-item">
                  <span className="process__number">05</span>
                  <div className="process__icon">
                    <i className="icon-head"></i>
                  </div>
                  <h4 className="process__title">Your custom Next process</h4>
                  <p className="process__desc">Our administration and support staff have exceptional skills to assist you.
                  </p>
                  <a href="#" className="btn btn__secondary btn__link">
                    <span>Meet Our Doctors</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="cta bg-light-blue">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-2 col-lg-2">
              <img src="https://7oroof.com/demos/medcity/assets/images/icons/alert2.png" className="cta__img" alt="alert" />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h4 className="cta__title">True Healthcare For Your Family!</h4>
              <p className="cta__desc">Serve the community by improving the quality of life through better health. We have
                put protocols to protect our patients and staff while continuing to provide medically necessary care.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <a href="appointment.html" className="btn btn__primary btn__secondary-style2 btn__rounded">
                <span>Healthcare Programs</span>
                <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
