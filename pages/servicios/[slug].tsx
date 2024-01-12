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
                {service.description.map((descriptionItem, index) => (
                  <DescriptionDisplayer
                    key={`description-item-${index}`}
                    {...descriptionItem}
                    company={company}
                  />
                ))}

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
