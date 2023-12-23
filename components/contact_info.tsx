import Link from "next/link";
import Slider from "react-slick";

export default function ContactInfo({ company }) {
  const available_days = company.schedules.filter(({details}) => !details.closed)

  return (
  
    <section className="contact-info py-0">
    <div className="container">
      <div className="row row-no-gutter boxes-wrapper">
        <div className="col-sm-12 col-md-4">
          <div className="contact-box d-flex">
            <div className="contact__icon">
              <i className="icon-call3"></i>
            </div>
            <div className="contact__content">
              <h2 className="contact__title">Emergencia</h2>
              <p className="contact__desc">Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos..</p>
              <Link href={`tel:${company.appointment.phone}`} className="phone__number">
                <i className="icon-phone"></i> <span>{company.appointment.phone}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="contact-box d-flex">
            <div className="contact__icon">
              <i className="icon-health-report"></i>
            </div>
            <div className="contact__content">
              <h2 className="contact__title">¿Por que elegir al Dr. Josue?</h2>
              <p className="contact__desc">Desde tu primera cita de valoración, experimentarás la excelencia y compromiso de nuestro servicio. Te llevara de la mano en el proceso de atencion de tu salud-enfermedad con el mayor sentido de humanismo .</p>
              
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="contact-box d-flex">
            <div className="contact__icon">
              <i className="icon-heart2"></i>
            </div>
            <div className="contact__content">
              <h2 className="contact__title">Horarios</h2>
              <ul className="time__list list-unstyled mb-0">
                {company.short_schedule.map(({text, details}) => (
                  <li><span>{text}</span><span>{details.from} - {details.to}</span></li>
                ))}
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  )
}
