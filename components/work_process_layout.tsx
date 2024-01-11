import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

export default function WorkProcessLayout({
  hospitals,
  company,
  workProgress,
}) {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="work-process work-process-carousel pt-130 pb-0 bg-overlay bg-overlay-secondary">
      <div className="bg-img">
        <Image
          width={400}
          height={400}
          src="/images/banners/1.jpg"
          alt="background"
        />
      </div>
      <div className="container">
        <div className="row heading-layout2 mb-20">
          <div className="col-12">
            <h2 className="heading__subtitle color-primary">
              {workProgress.subtitle}
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
            <h3 className="heading__title color-white">{workProgress.title}</h3>
            <p className="heading__desc font-weight-bold color-gray mb-40">
              {workProgress.description}
            </p>
            <ul className="list-items list-items-layout2 list-items-light list-horizontal list-unstyled">
              {workProgress.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.mx/josue-molina-ruiz/nefrologo-medico-general/cancun" rel="nofollow" data-zlw-doctor="josue-molina-ruiz" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Josue Molina Ruiz - Doctoralia.com.mx</a>
          </div>
          
        </div>
        <div className="row">
          <div className="col-12">
          
            <div className="carousel-container mt-90">
              <Slider {...settings} className="slick-carousel">
                {hospitals.map(({ name, url, logo, description }, index) => (
                  <div className="process-item" key={index}>
                    <h4 className="process__title pt-30">{name}</h4>
                    <p className="process__desc">{description}</p>
                    <Link
                      href={url}
                      target="_blank"
                      className="btn btn__secondary btn__link"
                    >
                      <span>Ver más</span>
                      <i className="icon-arrow-right"></i>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="cta bg-light-blue">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-2 col-lg-2">
              <Image
                width={170}
                height={144}
                src="/images/icons/alert2.png"
                className="cta__img"
                alt="alert"
              />
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h4 className="cta__title">
                ¡Verdadera atención médica para su familia!
              </h4>
              <p className="cta__desc">
                Servir a la comunidad mejorando la calidad de vida a través de
                una mejor salud. Hemos implementado protocolos para proteger a
                nuestros pacientes y personal mientras continuamos brindando
                atención médicamente necesaria.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <Link
                href={company.appointment.url}
                className="btn btn__primary btn__secondary-style2 btn__rounded"
              >
                <span>Agendar cita</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
