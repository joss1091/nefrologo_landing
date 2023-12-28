import Link from 'next/link'
import Image from 'next/image'
export default function Footer({services, company, doctor}) {
  return (
    
      <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="footer-widget-about">
                <Image width={185} height={50} src={company.logos.light} alt={company.name} className="mb-30" priority={false} />
                <p className="color-gray">{company.mission}
                </p>
                <Link href={company.appointment.url} target='_blank' className="btn btn__primary btn__primary-style2 btn__link">
                  <span>Agenda tu cita</span> <i className="icon-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Servicios</h6>
                <nav>
                  <ul className="list-unstyled">
                    {services.map(({name, slug}) => (
                      <li key={slug}><Link href={`/servicios/${slug}`}>{name} </Link></li>
                    ))}
                    

                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-widget-nav">
                <h6 className="footer-widget__title">Links</h6>
                <nav>
                  <ul className="list-unstyled">
                    <li><Link href="/quienes-somos">Acerca de nosotros</Link></li>
                    <li><Link href="/preguntas-frecuentes">Faqs</Link></li>
                    <li><Link href="/posts">Blog</Link></li>
                    <li><Link href={company.appointment.url}>Citas</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="footer-widget-contact">
                <h6 className="footer-widget__title color-heading">Contactanos</h6>
                <ul className="contact-list list-unstyled">
                  <li>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</li>
                  <li>
                    <a href={`tel:${company.appointment.phone}`} className="phone__number">
                      <i className="icon-phone"></i> <span>{company.appointment.phone}</span>
                    </a>
                  </li>
                  <li className="color-body">{company.location.address}</li>
                </ul>
                <div className="d-flex align-items-center">
                  <Link href="/contacto" className="btn btn__primary btn__link mr-30">
                    <i className="icon-arrow-right"></i> <span>Get Directions</span>
                  </Link>
                  <ul className="social-icons list-unstyled mb-0">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <span className="fz-14">&copy; 2023  All Rights Reserved. </span>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
