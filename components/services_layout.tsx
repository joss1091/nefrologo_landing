import Slider from "react-slick";
import SlideItem from "./slide_item";
import Image from "next/image";
export default function ServicesLayout({ services }) {
  const settings = {
    dots: true,
    arrows: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="services-layout1 services-carousel">
      <div className="bg-img">
        <Image width={400} height={400}
          src="/images/backgrounds/2.jpg"
          alt="background"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-60">
              <h2 className="heading__subtitle">Nuestros servicios</h2>
              <h3 className="heading__title">
                Te brindamos una atencion de excelente calidad.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider {...settings} slide={"section"} className="slick-carousel">
              {services.map((service) => (
                <SlideItem service={service} key={service.slug}/>
              ))}
            </Slider>
          </div>
          
        </div>
      </div>
    </section>
  );
}
