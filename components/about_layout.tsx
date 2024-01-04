import Link from "next/link";
import Image from 'next/image'
export default function AboutLayout({ data }) {
  return (
    <>
      <section className="about-layout3 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
              <div className="heading-layout2">
                <h2 className="heading__subtitle color-primary">
                  Ayudando al paciente para tener una mejor calidad de vida!!
                </h2>
                <h3 className="heading__title mb-60">
                  {data.about.question.label}
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-2">
              <div className="experience">
                <h2 className="experience__years">{data.doctor.experience_years}</h2>
                <h3 className="experience__text">años de experiencia</h3>
                <p>
                  Ofrecemos una amplia gama de atención y apoyo a nuestros
                  pacientes, desde el diagnóstico hasta la rehabilitación.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="video-banner-layout2 bg-overlay">
                <Image
                
                  width={430}
                  height={600}
                  src={data.doctor.avatar}
                  alt={data.doctor.name}
                  className="w-100"
                />
                <a
                  className="video__btn video__btn-white popup-video"
                  href="https://www.youtube.com/watch?v=dLJOOvksRNA"
                >
                  <div className="video__player">
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="video__btn-title color-white">
                    Ver video!
                  </span>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="about__text">
                <div className="text__icon">
                  <i className="icon-doctor"></i>
                </div>
                <p className="heading__desc font-weight-bold color-secondary mb-30">
                  {data.about.question.answer}
                </p>
                <p className="heading__desc">{data.about.description}</p>
                <Link
                  href="/quienes-somos"
                  className="btn btn__secondary btn__rounded mt-40"
                >
                  <span>Ver más</span> <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
