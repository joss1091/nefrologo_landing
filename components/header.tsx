import React, { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";
export default function Header() {
  useEffect(() => {
    var $win = $(window);

    require("bootstrap");

    $win.on("scroll", function () {
      if ($win.width() >= 992) {
        var $stickyNavbar = $(".sticky-navbar"),
          $secondaryNavbar = $(".secondary-nav");
        if ($win.scrollTop() > 150) {
          $stickyNavbar.addClass("is-sticky");
        } else {
          $stickyNavbar.removeClass("is-sticky");
        }
        if ($secondaryNavbar.length) {
          if ($win.scrollTop() > $secondaryNavbar.offset().top - 100) {
            $secondaryNavbar.addClass("secondary-nav-sticky");
          } else {
            $secondaryNavbar.removeClass("secondary-nav-sticky");
          }
        }
      }
    });
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").addClass("menu-opened");
    });

    $(".close-mobile-menu").on("click", function (e) {
      $(".navbar-collapse").removeClass("menu-opened");
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
                        Please feel free to contact our friendly reception staff
                        with any general or medical enquiry.
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
                    <a href="contact-us.html">Mon - Fri: 8:00 am - 7:00 pm</a>
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
          <a className="navbar-brand" href="/">
            <img
              src="https://7oroof.com/demos/medcity/assets/images/logo/logo-light.png"
              className="logo-light"
              alt="logo"
            />
            <img
              src="https://7oroof.com/demos/medcity/assets/images/logo/logo-dark.png"
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
                  href="/servicios"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Servicios
                </a>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <a href="/servicios/single" className="nav__item-link">
                      service
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <Link href="/quienes-somos" className="nav__item-link">
                  Quienes somos
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/posts" className="nav__item-link">
                  Blog
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/preguntas-frecuentes" className="nav__item-link">
                  Preguntar frecuentes
                </Link>
              </li>

              <li className="nav__item">
                <a href="/contacto" className="nav__item-link">
                  Contacto
                </a>
              </li>
            </ul>
            <button className="close-mobile-menu d-block d-lg-none">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
