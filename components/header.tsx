import React, { useEffect } from "react";
import $ from "jquery";
import Link from "next/link";
import Image from "next/image";
export default function Header({ services, company }) {
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
    $(".bg-img").each(function () {
      var imgSrc = $(this).children("img").attr("src");
      $(this)
        .parent()
        .css({
          "background-image": "url(" + imgSrc + ")",
          "background-size": "cover",
          "background-position": "center",
        });
      $(this).parent().addClass("bg-img");
      if ($(this).hasClass("background-size-auto")) {
        $(this).parent().addClass("background-size-auto");
      }
      $(this).remove();
    });
    
  }, []);

  const available_days = company.short_schedule
    .filter(({ details }) => !details.closed)
    .map(({ text, details }) => `${text} ${details.from} - ${details.to}`);
  return (
    <header className="header header-layout1">
      <div className="header-topbar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between mt-10">
                <ul className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0 mt-10">
                  <li>
                    <i className="fa fa-phone"></i>
                    <Link href={`tel:+52${company.appointment.phone}`}>
                      Linea de atención: {company.appointment.phone}
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-location-dot"></i>
                    <Link href="/contacto">
                      Ubicacion: {company.location.short_address}
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-clock"></i>
                    <Link href="/contacto">{available_days.join(" / ")}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            
            <Image
              height={79}
              width={150}
              src={company.logos.light}
              className="logo-light"
              alt={company.name}
            />
            <Image
              height={79}
              width={150}
              src={company.logos.dark}
              className="logo-dark"
              alt={company.name}
            />
          </Link>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item has-dropdown">
                <Link
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle nav__item-link"
                >
                  Servicios
                </Link>
                <ul className="dropdown-menu">
                  {services.map(({ slug, name }) => (
                    <li className="nav__item" key={slug}>
                      <Link
                        href={`/servicios/${slug}`}
                        className="nav__item-link"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav__item">
                <Link href="/quienes-somos" className="nav__item-link">
                  Quienes somos
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/blog" className="nav__item-link">
                  Blog
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/preguntas-frecuentes" className="nav__item-link">
                  Preguntas frecuentes
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/contacto" className="nav__item-link">
                  Contacto
                </Link>
              </li>
            </ul>
            <button className="close-mobile-menu d-block d-lg-none">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="d-none d-xl-flex align-items-center position-relative ml-30">
            <Link
              href={company.appointment.url}
              target="_blank"
              className="btn btn__primary btn__rounded ml-30"
            >
              <i className="fa fa-calendar"></i>
              <span>Agendar cita</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
