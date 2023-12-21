import Slider from "react-slick";

export default function ContactInfo({  }) {
 

  return (
  
    <section className="contact-info py-0">
    <div className="container">
      <div className="row row-no-gutter boxes-wrapper">
        <div className="col-sm-12 col-md-4">
          <div className="contact-box d-flex">
            <div className="contact__icon">
              <i className="icon-call3"></i>
            </div>
            <div className="contact__content">
              <h2 className="contact__title">Emergency Cases</h2>
              <p className="contact__desc">Please feel free to contact our friendly reception staff with any general or
                medical enquiry.</p>
              <a href="tel:+201061245741" className="phone__number">
                <i className="icon-phone"></i> <span>01061245741</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="contact-box d-flex">
            <div className="contact__icon">
              <i className="icon-health-report"></i>
            </div>
            <div className="contact__content">
              <h2 className="contact__title">Doctors Timetable</h2>
              <p className="contact__desc">Qualified doctors available six days a week, view our timetable to make an
                appointment.</p>
              <a href="doctors-timetable.html" className="btn btn__white btn__outlined btn__rounded">
                <span>View Timetable</span><i className="icon-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="contact-box d-flex">
            <div className="contact__icon">
              <i className="icon-heart2"></i>
            </div>
            <div className="contact__content">
              <h2 className="contact__title">Opening Hours</h2>
              <ul className="time__list list-unstyled mb-0">
                <li><span>Monday - Friday</span><span>8.00 - 7:00 pm</span></li>
                <li><span>Saturday</span><span>9.00 - 10:00 pm</span></li>
                <li><span>Sunday</span><span>10.00 - 12:00 pm</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  )
}
