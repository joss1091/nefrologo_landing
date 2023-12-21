import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    
      <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="footer-widget-about">
                <img src="assets/images/logo/logo-light.png" alt="logo" className="mb-30" />
                <p className="color-gray">Our goal is to deliver quality of care in a courteous, respectful, and
                  compassionate manner. We hope you will allow us to care for you and strive to be the first and best
                  choice for your family healthcare.
                </p>
                <a href="appointment.html" className="btn btn__primary btn__primary-style2 btn__link">
                  <span>Make Appointment</span> <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Departments</h6>
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#">Neurology Clinic</a></li>
                    <li><a href="#">Cardiology Clinic</a></li>
                    <li><a href="#">Pathology Clinic</a></li>
                    <li><a href="#">Laboratory Analysis</a></li>
                    <li><a href="#">Pediatric Clinic</a></li>
                    <li><a href="#">Cardiac Clinic</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Links</h6>
                <nav>
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our CLinic</a></li>
                    <li><a href="#">Our Doctors</a></li>
                    <li><a href="#">News & Media</a></li>
                    <li><a href="#">Appointments</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-widget-contact">
                <h6 className="footer-widget__title color-heading">Quick Contacts</h6>
                <ul className="contact-list list-unstyled">
                  <li>If you have any questions or need help, feel free to contact with our team.</li>
                  <li>
                    <a href="tel:01061245741" className="phone__number">
                      <i className="icon-phone"></i> <span>01061245741</span>
                    </a>
                  </li>
                  <li className="color-body">2307 Beverley Rd Brooklyn, New York 11226 United States.</li>
                </ul>
                <div className="d-flex align-items-center">
                  <a href="contact-us.html" className="btn btn__primary btn__link mr-30">
                    <i className="icon-arrow-right"></i> <span>Get Directions</span>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <span className="fz-14">&copy; 2020 DataSoft, All Rights Reserved. With Love by</span>
              <a className="fz-14 color-primary" href="http://themeforest.net/user/7oroof">7oroof.com</a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <nav>
                <ul className="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end mb-0">
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookies</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
