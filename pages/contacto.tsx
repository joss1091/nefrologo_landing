import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";

import Meta from "../components/meta";
import Data from "../lib/data";
import Image from "next/image";

export default function Contacto({ preview, company }) {
  return (
    <Layout preview={preview}>
      <Meta title="Contacto" />
      <Container>
        <section className="google-map py-0">
          <iframe height="500" width="100%" src={company.location.map}></iframe>
        </section>

        <section className="contact-layout1 pt-0 mt--100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contact-panel d-flex flex-wrap">
                  <div className="contact-panel__form">
                  <a id="zl-url" className="zl-url" href="https://www.doctoralia.com.mx/josue-molina-ruiz/nefrologo-medico-general/cancun" rel="nofollow" data-zlw-doctor="josue-molina-ruiz" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">Josue Molina Ruiz - Doctoralia.com.mx</a>
                  </div>
              
                  <div className="contact-panel__info d-flex flex-column justify-content-between bg-overlay bg-overlay-primary-gradient">
                    <div className="bg-img">
                      <Image
                        width={430}
                        height={600}
                        src="/images/banners/1.jpg"
                        alt="banner"
                      />
                    </div>
                    <div>
                      <h4 className="contact-panel__title color-white">
                        Contacto
                      </h4>
                      <p className="contact-panel__desc font-weight-bold color-white mb-30">
                      Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
                      </p>
                    </div>
                    <div>
                      <ul className="contact__list list-unstyled mb-30">
                        <li>
                          <i className="icon-phone"></i>
                          <a href={`tel:+52${company.appointment.phone}`}>
                            Linea de atención: {company.appointment.phone}
                          </a>
                        </li>
                        <li>
                          <i className="icon-email"></i>
                          <a href={`mailto:${company.email}`}>
                            Correo electronico: {company.email}
                          </a>
                        </li>
                        <li>
                          <i className="icon-location"></i>
                          <a href="#">{company.location.address}</a>
                        </li>
                        {company.short_schedule.map(({ text, details }, index) => (
                          <li key={`schedule-${index}`} >
                            <i className="icon-clock"></i>
                            <span>
                              {text}
                              {details.closed
                                ? " Cerrado"
                                : ` ${details.from} - ${details.to}`}
                            </span>
                          </li>
                        ))}
                      </ul>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const { company } = Data;

  return {
    props: { preview, company },
    revalidate: 10,
  };
};
