import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";

import Meta from "../components/meta";
import Data from "../lib/data";
import Image from "next/image";
import Link from "next/link";

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
                  <form
                    className="contact-panel__form"
                    method="post"
                    action="https://7oroof.com/demos/medcity/assets/php/contact.php"
                    id="contactForm"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <h4 className="contact-panel__title">
                          Como podemos ayudarte?
                        </h4>
                        
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-user form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            id="contact-name"
                            name="contact-name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-email form-group-icon"></i>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Correo electronico"
                            id="contact-email"
                            name="contact-email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-phone form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Telefono"
                            id="contact-Phone"
                            name="contact-phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-news form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Motivo"
                            id="contact-subject"
                            name="contact-subject"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-group">
                          <i className="icon-alert form-group-icon"></i>
                          <textarea
                            className="form-control"
                            placeholder="Mesaje"
                            id="contact-message"
                            name="contact-message"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                        >
                          <span>Enviar</span>{" "}
                          <i className="icon-arrow-right"></i>
                        </button>
                        <div className="contact-result"></div>
                      </div>
                    </div>
                  </form>
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
