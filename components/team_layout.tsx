import Slider from "react-slick";

export default function TeamLayout({  }) {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
    
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 3
        }
      }, 
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 1
        }
      }, 
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="team-layout2 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div className="heading text-center mb-40">
            <h3 className="heading__title">Meet Our Doctors</h3>
            <p className="heading__desc">Our administration and support staff all have exceptional people skills and
              trained to assist you with all medical enquiries.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider {...settings} className="slick-carousel">
            
            <div className="member">
              <div className="member__img">
                <img src="https://7oroof.com/demos/medcity/assets/images/team/1.jpg" alt="member img" />
              </div>
              <div className="member__info">
                <h5 className="member__name"><a href="doctors-single-doctor1.html">Mike Dooley</a></h5>
                <p className="member__job">Cardiology Specialist</p>
                <p className="member__desc">Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane
                  University prior to attending St George's University School of Medicine</p>
                <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                  <a href="doctors-single-doctor1.html" className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="phone"><i className="fas fa-phone-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="member">
              <div className="member__img">
                <img src="https://7oroof.com/demos/medcity/assets/images/team/5.jpg" alt="member img" />
              </div>
              <div className="member__info">
                <h5 className="member__name"><a href="doctors-single-doctor1.html">Dermatologists</a></h5>
                <p className="member__job">Cardiology Specialist</p>
                <p className="member__desc">Brian specializes in treating skin, hair, nail, and mucous membrane. He also
                  address cosmetic issues, helping to revitalize the appearance of the skin</p>
                <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                  <a href="doctors-single-doctor1.html" className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="phone"><i className="fas fa-phone-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="member">
              <div className="member__img">
                <img src="https://7oroof.com/demos/medcity/assets/images/team/5.jpg" alt="member img" />
              </div>
              <div className="member__info">
                <h5 className="member__name"><a href="doctors-single-doctor1.html">Maria Andaloro</a></h5>
                <p className="member__job">Pediatrician</p>
                <p className="member__desc">Andaloro graduated from medical school and completed 3 years residency program
                  in pediatrics. She passed rigorous exams by the American Board of Pediatrics.</p>
                <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                  <a href="doctors-single-doctor1.html" className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="phone"><i className="fas fa-phone-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          
            <div className="member">
              <div className="member__img">
                <img src="https://7oroof.com/demos/medcity/assets/images/team/5.jpg" alt="member img" />
              </div>
              <div className="member__info">
                <h5 className="member__name"><a href="doctors-single-doctor1.html">Dupree Black</a></h5>
                <p className="member__job">Urologist</p>
                <p className="member__desc">Black diagnose and treat diseases of the urinary tract in both men and women.
                  He
                  also diagnose and treat anything involving the reproductive tract in men.</p>
                <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                  <a href="doctors-single-doctor1.html" className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="phone"><i className="fas fa-phone-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="member">
              <div className="member__img">
                <img src="https://7oroof.com/demos/medcity/assets/images/team/5.jpg" alt="member img" />
              </div>
              <div className="member__info">
                <h5 className="member__name"><a href="doctors-single-doctor1.html">Markus skar</a></h5>
                <p className="member__job">Laboratory</p>
                <p className="member__desc">Skar play a very important role in your health care. People working in the
                  clinical laboratory are responsible for conducting tests that provide crucial information.</p>
                <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                  <a href="doctors-single-doctor1.html" className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="phone"><i className="fas fa-phone-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          
            <div className="member">
              <div className="member__img">
                <img src="https://7oroof.com/demos/medcity/assets/images/team/5.jpg" alt="member img" />
              </div>
              <div className="member__info">
                <h5 className="member__name"><a href="doctors-single-doctor1.html">Kiano Barker</a></h5>
                <p className="member__job">Pathologist </p>
                <p className="member__desc">Barker help care for patients every day by providing their doctors with the
                  information needed to ensure appropriate care. He also valuable resources for other physicians.</p>
                <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                  <a href="doctors-single-doctor1.html" className="btn btn__secondary btn__link btn__rounded">
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </a>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="phone"><i className="fas fa-phone-alt"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>

  )
}
