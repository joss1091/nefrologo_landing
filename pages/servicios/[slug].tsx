import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Data from "../../lib/data";
import Meta from "../../components/meta";
import Questions from "../../components/questions";
import Link from "next/link";
import ServiceListWidget from "../../components/serviceListWidget";
import EmergencyWidget from "../../components/emergencyWidget";
import ScheduleWidget from "../../components/scheduleWidget";
import ErrorPage from "next/error";
import Image from "next/image";
import DescriptionDisplayer from "../../components/description_displayer";

export default function Index({ service, otherServices, company, preview }) {
  if (!service) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Meta title={service?.name} />
      <Container>
        <section className="page-title page-title-layout2 bg-overlay text-center pb-0">
          <div className="bg-img">
            <Image
              width={430}
              height={600}
              src="/images/page-titles/3.jpg"
              alt="background"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                
                <h1 className="pagetitle__heading">{service?.name}</h1>
                <p className="pagetitle__desc mb-30">
                  {service.short_description.content}
                </p>
                <a href="#content" className="scroll-down">
                  <i className="fas fa-long-arrow-alt-down"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="content" className=" pb-80">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="text-block mb-50">
                {service.description.map((descriptionItem, index) => (
                  <DescriptionDisplayer key={`description-item-${index}`} {...descriptionItem} />
                ))}
                  

                </div>

                
                <div className="widget-plan mb-60">
                  <div className="widget__body">
                    <h5 className="widget__title">Health Care Plans</h5>
                    <p>
                      Our doctors include highly qualified male and female
                      practitioners who come from a range of backgrounds and
                      bring with a diversity of skills and special interests.
                      Our administration and support staff all have exceptional
                      people skills and trained to assist you with all medical
                      enquiries.
                    </p>
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="plan__items">
                          <ul className="list-items list-items-layout2 list-unstyled mb-0">
                            <li>Review your medical records.</li>
                            <li>Check and test blood pressure.</li>
                            <li>Run tests such as blood tests.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="plan__items">
                          <ul className="list-items list-items-layout2 list-unstyled mb-0">
                            <li>Check and test lung function.</li>
                            <li>Narrowing of the arteries.</li>
                            <li>Other specialized tests.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget__footer d-flex flex-wrap justify-content-between align-items-center">
                    <div className="plan__price"></div>
                    <div className="d-flex align-items-center">
                      <Link
                        href="#"
                        className="btn btn__secondary btn__rounded mr-30"
                      >
                        <span>Agendar cita</span>{" "}
                        <i className="icon-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-block mb-50">
                  <h5 className="text-block__title">Our Core Values</h5>
                  <p className="text-block__desc mb-20">
                    Today the hospital is recognised as a world renowned
                    institution, not only providing outstanding care and
                    treatment, but improving the outcomes for all through a
                    comprehensive medical research. For over 20 years, our
                    hospital has touched lives of millions of people, and
                    provide care and treatment for the sickest in our community
                    including rehabilitation and aged care.
                  </p>
                </div>
                <div className="fancybox-layout1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-heart"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">Medical Check Ups</h4>
                          <p className="fancybox__desc">
                            Recognised as a world renowned institution, you can
                            consult any of our doctors by visiting our clinic.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-doctor"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">Medical Treatment</h4>
                          <p className="fancybox__desc">
                            Free or low cost coverage adults with limited income
                            recognised as a world renowned institution.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-call3"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">
                            Emergency Help 24/7{" "}
                          </h4>
                          <p className="fancybox__desc">
                            Contact our reception staff with any medical enquiry
                            any time for low cost coverage adults.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-drugs"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">
                            Research Professionals{" "}
                          </h4>
                          <p className="fancybox__desc">
                            All medical aspects practice for family, our
                            reception staff with any medical enquiry any time.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Questions questions={service.faqs} />
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar has-marign-left sticky-top">
                  <ServiceListWidget services={otherServices} />
                  <EmergencyWidget company={company} />

                  <ScheduleWidget company={company} />
                </aside>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const service = Data.services.find((service) => service.slug == params?.slug);
  const otherServices = Data.services.filter(
    (service) => service.slug != params?.slug
  );

  return {
    props: { service, preview, otherServices, company: Data.company },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Data.services.map(({ slug }) => `/servicios/${slug}`) || [],
    fallback: true,
  };
};
