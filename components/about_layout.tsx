import Slider from "react-slick";

export default function AboutLayout({  }) {
 

  return (
  
    <section className="about-layout2 pb-0">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
          <div className="heading-layout2">
            <h3 className="heading__title mb-60">Improving The Quality Of Your <br /> Life Through Better Health.</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div className="text-with-icon">
            <div className="text__icon">
              <i className="icon-doctor"></i>
            </div>
            <div className="text__content">
              <p className="heading__desc font-weight-bold color-secondary mb-30">Our goal is to deliver quality of care
                in a courteous, respectful, and
                compassionate manner. We hope you will allow us to care for you and strive to be the first and best
                choice for healthcare.
              </p>
              <a href="doctors-timetable.html" className="btn btn__secondary btn__rounded mb-70">
                <span>Find A Doctor</span> <i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="video-banner-layout2 bg-overlay">
            <img src="assets/images/about/2.jpg" alt="about" className="w-100" />
            <a className="video__btn video__btn-white popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
              <div className="video__player">
                <i className="fa fa-play"></i>
              </div>
              <span className="video__btn-title color-white">Watch Our Video!</span>
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-7">
          <div className="about__text bg-white">
            <p className="heading__desc mb-30">Our goal is to deliver quality of care in a courteous, respectful, and
              compassionate
              manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.
            </p>
            <p className="heading__desc mb-30">We will work with you to develop individualised care plans, including
              management of
              chronic diseases. We are committed to being the region’s premier healthcare network providing patient
              centered care that inspires clinical and service excellence.</p>
            <ul className="list-items list-unstyled">
              <li>We conduct a range of tests to help us work out why you're not feeling well and determine the
                right
                treatment for you.</li>
              <li>Our expert doctors, nurses and allied health professionals manage patients with a broad range of
                medical issues.
              </li>
              <li>We offer a wide range of care and support to our patients, from diagnosis to treatment and
                rehabilitation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>



  )
}
