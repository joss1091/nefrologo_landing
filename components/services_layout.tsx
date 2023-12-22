import Slider from "react-slick";
import SlideItem from "./slide_item";


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
        <Slider {...settings} slide={"section"} className="slick-carousel">
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
          </Slider>
        </div>
      </div>
    </div>
  </section>




  )
}
