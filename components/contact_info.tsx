import Link from "next/link";

export default function ContactInfo({ company }) {


  return (
    <section className="contact-info py-0 mt-20">
      <div className="container">
        <div className="row row-no-gutter boxes-wrapper">
          <div className="col-sm-12 col-md-6">
            <div className="contact-box d-flex">
              <div className="contact__icon">
                <i className="icon-call3"></i>
              </div>
              <div className="contact__content">
                <h2 className="contact__title">Atención</h2>
                <p className="contact__desc">
                  Si tienes alguna pregunta o necesitas ayuda, no dudes en
                  contactarnos..
                </p>
                <Link
                  href={`tel:${company.appointment.phone}`}
                  className="phone__number"
                >
                  <i className="icon-phone"></i>{" "}
                  <span>{company.appointment.phone}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="contact-box d-flex">
              <div className="contact__icon">
                <i className="icon-heart2"></i>
              </div>
              <div className="contact__content w-100">
                <h2 className="contact__title">Horarios</h2>
                <ul className="time__list list-unstyled mb-0">
                  {company.short_schedule.map(({ text, details }, index) => (
                    <li key={index}>
                      <span>{text}</span>
                      <span>
                        {details.closed ? "Cerrado" : `${details.from} - ${details.to}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
