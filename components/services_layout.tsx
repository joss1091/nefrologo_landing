import Slider from "react-slick";


export default function ServicesLayout({  }) {
  const settings = {
    dots: true,
    arrows: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [ {breakpoint: 992, settings: {slidesToShow: 2}}, {breakpoint: 767, settings: {slidesToShow: 1}}, {breakpoint: 480, settings: {slidesToShow: 1}}]
  };

  return (
    <section className="services-layout1 services-carousel">
    <div className="bg-img"><img src="https://7oroof.com/demos/medcity/assets/images/backgrounds/2.jpg" alt="background" /></div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div className="heading text-center mb-60">
            <h2 className="heading__subtitle">The Best Medical And General Practice Care!</h2>
            <h3 className="heading__title">Providing Medical Care For The Sickest In Our Community.</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <Slider {...settings} className="slick-carousel">
          
            <div className="service-item">
              <div className="service__icon">
                <i className="icon-head"></i>
                <i className="icon-head"></i>
              </div>
              <div className="service__content">
                <h4 className="service__title">Neurology Clinic</h4>
                <p className="service__desc">Some neurologists receive subspecialty training focusing on a particular area
                  of
                  the fields, these training programs are called fellowships, and are one to two years.
                </p>
                <ul className="list-items list-items-layout1 list-unstyled">
                  <li>Neurocritical Care</li>
                  <li>Neuro Oncology</li>
                  <li>Geriatric Neurology</li>
                </ul>
                <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service__icon">
                <i className="icon-heart"></i>
                <i className="icon-heart"></i>
              </div>
              <div className="service__content">
                <h4 className="service__title">Cardiology Clinic</h4>
                <p className="service__desc">All cardiologists study the disorders of the heart, but the study of adult
                  and
                  child heart disorders are trained to take care of small children and adult heart disease.
                </p>
                <ul className="list-items list-items-layout1 list-unstyled">
                  <li>Neurocritical Care</li>
                  <li>Neuro Oncology</li>
                  <li>Geriatric Neurology</li>
                </ul>
                <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          
            <div className="service-item">
              <div className="service__icon">
                <i className="icon-microscope"></i>
                <i className="icon-microscope"></i>
              </div>
              <div className="service__content">
                <h4 className="service__title">Pathology Clinic</h4>
                <p className="service__desc">Pathology is the study of disease, it is the bridge between science and
                  medicine.
                  Also it underpins every aspect of patient care, from diagnostic testing and treatment.
                </p>
                <ul className="list-items list-items-layout1 list-unstyled">
                  <li>Surgical Pathology</li>
                  <li>Histopathology</li>
                  <li>Cytopathology </li>
                </ul>
                <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="service-item">
              <div className="service__icon">
                <i className="icon-dropper"></i>
                <i className="icon-dropper"></i>
              </div>
              <div className="service__content">
                <h4 className="service__title">Laboratory Analysis</h4>
                <p className="service__desc">Analyzing the radon or radon progeny concentrations with passive devices, or
                  the
                  act of calibrating radon or radon progeny measurement devices.
                </p>
                <ul className="list-items list-items-layout1 list-unstyled">
                  <li>Newborn Care</li>
                  <li>Umbilical Cord Appearance </li>
                  <li>Repositioning Techniques</li>
                </ul>
                <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service__icon">
                <i className="icon-heart3"></i>
                <i className="icon-heart3"></i>
              </div>
              <div className="service__content">
                <h4 className="service__title">Pediatric Clinic</h4>
                <p className="service__desc">Pediatric providers see patients from birth into early adulthood to make sure
                  children achieve stay healthy. Our care includes preventive health checkups.
                </p>
                <ul className="list-items list-items-layout1 list-unstyled">
                  <li>Clinical laboratory</li>
                  <li>Research Analyst</li>
                  <li>Quality Assurance</li>
                </ul>
                <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service__icon">
                <i className="icon-heart2"></i>
                <i className="icon-heart2"></i>
              </div>
              <div className="service__content">
                <h4 className="service__title">Cardiac Clinic</h4>
                <p className="service__desc">For people requiring additional follow up, the Cardiac Clinic provides rapid
                  access to professionals specialized in diagnosing and treating heart disease.
                </p>
                <ul className="list-items list-items-layout1 list-unstyled">
                  <li>Macular degeneration</li>
                  <li>Diabetic retinopathy</li>
                  <li>Excessive tearing</li>
                </ul>
                <a href="services-single.html" className="btn btn__secondary btn__outlined btn__rounded">
                  <span>Read More</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>




  )
}
