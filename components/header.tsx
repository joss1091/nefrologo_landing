
import React, { useEffect } from 'react';
import $ from 'jquery';
export default function Header() {

  useEffect(() => {
  
    require("bootstrap")
    $('.navbar-toggler').on('click', function () {
      $('.navbar-collapse').addClass('menu-opened');
  })

  $('.close-mobile-menu').on('click', function (e) {
      $('.navbar-collapse').removeClass('menu-opened');
  });
  }, []);
  return (
    <header className="header header-layout1">
          <div className="header-topbar">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0">
                      <li>
                        <button
                          className="miniPopup-emergency-trigger"
                          type="button"
                        >
                          24/7 Emergency
                        </button>
                        <div
                          id="miniPopup-emergency"
                          className="miniPopup miniPopup-emergency text-center"
                        >
                          <div className="emergency__icon">
                            <i className="icon-call3"></i>
                          </div>
                          <a href="tel:+201061245741" className="phone__number">
                            <i className="icon-phone"></i>{" "}
                            <span>+2 01061245741</span>
                          </a>
                          <p>
                            Please feel free to contact our friendly reception
                            staff with any general or medical enquiry.
                          </p>
                          <a
                            href="appointment.html"
                            className="btn btn__secondary btn__link btn__block"
                          >
                            <span>Make Appointment</span>{" "}
                            <i className="icon-arrow-right"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <i className="icon-phone"></i>
                        <a href="tel:+5565454117">
                          Emergency Line: (002) 01061245741
                        </a>
                      </li>
                      <li>
                        <i className="icon-location"></i>
                        <a href="#">Location: Brooklyn, New York</a>
                      </li>
                      <li>
                        <i className="icon-clock"></i>
                        <a href="contact-us.html">
                          Mon - Fri: 8:00 am - 7:00 pm
                        </a>
                      </li>
                    </ul>
                    <div className="d-flex">
                      <ul className="social-icons list-unstyled mb-0 mr-30">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg sticky-navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/images/logo/logo-light.png"
                  className="logo-light"
                  alt="logo"
                />
                <img
                  src="assets/images/logo/logo-dark.png"
                  className="logo-dark"
                  alt="logo"
                />
              </a>
              <button className="navbar-toggler" type="button">
                <span className="menu-lines">
                  <span></span>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="mainNavigation">
                <ul className="navbar-nav ml-auto">
                  <li className="nav__item has-dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link active"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a href="index.html" className="nav__item-link">
                          Home Main
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="home-modern.html" className="nav__item-link">
                          Home Modern
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="home-classic.html" className="nav__item-link">
                          Home Classic
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="home-dentist.html" className="nav__item-link">
                          Home Dentist
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="home-pharmacy.html" className="nav__item-link">
                          Home pharmacy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                    >
                      About Us
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a href="about-us.html" className="nav__item-link">
                          About Us
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="services.html" className="nav__item-link">
                          Our Services
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="services-single.html"
                          className="nav__item-link"
                        >
                          single Services
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="pricing.html" className="nav__item-link">
                          Pricing & Plans
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="appointment.html" className="nav__item-link">
                          Appointments
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="faqs.html" className="nav__item-link">
                          Help & FAQs
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="gallery.html" className="nav__item-link">
                          Our Gallery
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                    >
                      Doctors
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a
                          href="doctors-timetable.html"
                          className="nav__item-link"
                        >
                          Doctors Timetable
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="doctors-standard.html"
                          className="nav__item-link"
                        >
                          Our Doctors Standard
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="doctors-modern.html"
                          className="nav__item-link"
                        >
                          Our Doctors Modern
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="doctors-grid.html" className="nav__item-link">
                          Our Doctors Grid
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="doctors-single-doctor1.html"
                          className="nav__item-link"
                        >
                          Single Doctor 01
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="doctors-single-doctor2.html"
                          className="nav__item-link"
                        >
                          Single Doctor 02
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a href="blog.html" className="nav__item-link">
                          Blog Grid
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="blog-single-post.html"
                          className="nav__item-link"
                        >
                          Single Blog Post
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item has-dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      className="dropdown-toggle nav__item-link"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav__item">
                        <a href="shop.html" className="nav__item-link">
                          Our Products
                        </a>
                      </li>
                      <li className="nav__item">
                        <a
                          href="shop-single-product.html"
                          className="nav__item-link"
                        >
                          Products Single
                        </a>
                      </li>
                      <li className="nav__item">
                        <a href="cart.html" className="nav__item-link">
                          Cart
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav__item">
                    <a href="contact-us.html" className="nav__item-link">
                      Contacts
                    </a>
                  </li>
                </ul>
                <button className="close-mobile-menu d-block d-lg-none">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="d-none d-xl-flex align-items-center position-relative ml-30">
                <div className="miniPopup-departments-trigger">
                  <span
                    className="menu-lines"
                    id="miniPopup-departments-trigger-icon"
                  >
                    <span></span>
                  </span>
                  <a href="departments.html">Departments</a>
                </div>
                <ul
                  id="miniPopup-departments"
                  className="miniPopup miniPopup-departments dropdown-menu"
                >
                  <li className="nav__item">
                    <a href="department-single.html" className="nav__item-link">
                      Neurology Clinic
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="department-single.html" className="nav__item-link">
                      Cardiology Clinic
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="department-single.html" className="nav__item-link">
                      Pathology Clinic
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="department-single.html" className="nav__item-link">
                      Laboratory Clinic
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="department-single.html" className="nav__item-link">
                      Pediatric Clinic
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="department-single.html" className="nav__item-link">
                      Cardiac Clinic
                    </a>
                  </li>
                </ul>
                <a
                  href="appointment.html"
                  className="btn btn__primary btn__rounded ml-30"
                >
                  <i className="icon-calendar"></i>
                  <span>Appointment</span>
                </a>
              </div>
            </div>
          </nav>
        </header>
  )
}
