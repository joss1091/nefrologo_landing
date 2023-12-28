
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";

import Meta from "../components/meta";
import Data from "../lib/data";
import Image from "next/image";

export default function Contacto({  location, preview }) {
  return (
    <Layout preview={preview}>
      <Meta title="Contacto" />
      <Container>
        <section className="google-map py-0">
          <iframe height="500" width="100%" src={location.map}></iframe>
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
                          How Can We Help?{" "}
                        </h4>
                        <p className="contact-panel__desc mb-30">
                          Please feel welcome to contact our friendly reception
                          staff with any general or medical enquiry. Our doctors
                          will receive or return any urgent calls.
                        </p>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-user form-group-icon"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
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
                            placeholder="Email"
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
                            placeholder="Phone"
                            id="contact-Phone"
                            name="contact-phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="form-group">
                          <i className="icon-news form-group-icon"></i>
                          <select className="form-control">
                            <option value="0">Subject</option>
                            <option value="1">Subject 1</option>
                            <option value="2">Subject 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <i className="icon-alert form-group-icon"></i>
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            id="contact-message"
                            name="contact-message"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                        >
                          <span>Submit Request</span>{" "}
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
                        Quick Contacts
                      </h4>
                      <p className="contact-panel__desc font-weight-bold color-white mb-30">
                        Please feel free to contact our friendly staff with any
                        medical enquiry.
                      </p>
                    </div>
                    <div>
                      <ul className="contact__list list-unstyled mb-30">
                        <li>
                          <i className="icon-phone"></i>
                          <a href="tel:+5565454117">
                            Emergency Line: (002) 01061245741
                          </a>
                        </li>
                        <li>
                          <i className="icon-location"></i>
                          <a href="#">Location: Brooklyn, New York</a>
                        </li>
                        <li>
                          <i className="icon-clock"></i>
                          <a href="contact-us.html">
                            Mon - Fri: 8:00 am - 7:00 pm
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn__white btn__rounded btn__outlined"
                      >
                        Contact Us
                      </a>
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
  
  const location = Data.company.location;

  return {
    props: {  preview, location },
    revalidate: 10,
  };
};
