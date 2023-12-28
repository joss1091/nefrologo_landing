import Link from "next/link";
import Image from "next/image";

export default function FeaturesLayout({ services }) {
 

  return (
    <section className="features-layout2 pt-130 bg-overlay bg-overlay-primary">
    <div className="bg-img"><Image width={430}
                  height={600} src="/images/backgrounds/2.jpg" alt="background" /></div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-1">
          <div className="heading__layout2 mb-50">
            <h3 className="heading__title color-white">Medcity Has Touched The Lives Of Patients & Providing Care for The
              Sickest In Our Community.</h3>
          </div>
        </div>
      </div>
      <div className="row mb-100">
        <div className="col-sm-3 col-md-3 col-lg-1 offset-lg-5">
          <div className="heading__icon">
            <i className="icon-insurance"></i>
          </div>
        </div>
        <div className="col-sm-9 col-md-9 col-lg-6">
          <p className="heading__desc font-weight-bold color-white mb-30">Medcity has been present in Europe since 1990,
            offering innovative
            solutions, specializing in medical services for treatment of medical infrastructure. With over 100
            professionals actively participates in numerous initiatives aimed at creating sustainable change for
            patients!
          </p>
          <a href="#" className="btn btn__white btn__link">
            <i className="icon-arrow-right icon-filled"></i>
            <span>Our Core Values</span>
          </a>
        </div>
      </div>
      <div className="row">
        {services.map(({name, slug}) => (
           <div key={slug} className="col-sm-6 col-md-6 col-lg-3">
           <div className="feature-item">
             <div className="feature__img">
               <Image height={500} width={500} src="/images/services/2.jpg" alt={services.name} loading="lazy" />
             </div>
             <div className="feature__content">
               <div className="feature__icon">
                 <i className="icon-heart"></i>
               </div>
               <h4 className="feature__title">{name}</h4>
             </div>
             <Link href="#" className="btn__link">
               <i className="icon-arrow-right icon-outlined"></i>
             </Link>
           </div>
         </div>
        ))}
       
        
      </div>
      <div className="row">
        <div className="col-md-12 col-lg-6 offset-lg-3 text-center">
          <p className="font-weight-bold color-gray mb-0">We hope you will allow us to care for you and strive to be the
            first and best choice for healthcare.
            <a href="#" className="color-secondary">
              <span>Contact Us For More Information</span> <i className="icon-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>



  )
}
