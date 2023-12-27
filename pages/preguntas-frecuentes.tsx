
import { GetStaticProps } from "next";
import Container from "../components/container";

import Layout from "../components/layout";
import Data from "../lib/data";
import Questions from "../components/questions";
import Meta from "../components/meta";
export default function Faqs({ faqs, preview }) {
  return (
    <Layout preview={preview}>
      <Meta title={"Preguntas Frecuentes"} />
      <Container>
        <section className="faq pt-120 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar has-marign-right">
                  <div className="widget widget-help bg-overlay bg-overlay-secondary-gradient">
                    <div className="bg-img">
                      <img
                        src="https://7oroof.com/demos/medcity/assets/images/banners/5.jpg"
                        alt="background"
                      />
                    </div>
                    <div className="widget-content">
                      <div className="widget__icon">
                        <i className="icon-call3"></i>
                      </div>
                      <h4 className="widget__title">Emergency Cases</h4>
                      <p className="widget__desc">
                        Please feel welcome to contact our friendly reception
                        staff with any general or medical enquiry call us.
                      </p>
                      <a href="tel:+201061245741" className="phone__number">
                        <i className="icon-phone"></i> <span>01061245741</span>
                      </a>
                    </div>
                  </div>
                  <div className="widget widget-schedule">
                    <div className="widget-content">
                      <div className="widget__icon">
                        <i className="icon-charity2"></i>
                      </div>
                      <h4 className="widget__title">Opening Hours</h4>
                      <ul className="time__list list-unstyled mb-0">
                        <li>
                          <span>Monday - Friday</span>
                          <span>8.00 - 7:00 pm</span>
                        </li>
                        <li>
                          <span>Saturday</span>
                          <span>9.00 - 10:00 pm</span>
                        </li>
                        <li>
                          <span>Sunday</span>
                          <span>10.00 - 12:00 pm</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8" >
                <Questions questions={faqs} />
              </div>
              
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const faqs = Data.faqs;

  return {
    props: { faqs, preview },
    revalidate: 10,
  };
};
