
const Container = dynamic(() => import("../../components/container"));
const Layout = dynamic(() => import("../../components/layout"));
const Meta = dynamic(() => import("../../components/meta"));
const Questions = dynamic(() => import("../../components/questions"));
const ErrorPage = dynamic(() => import("next/error"));
const ServiceListWidget = dynamic(() => import("../../components/serviceListWidget"));
const EmergencyWidget = dynamic(() => import("../../components/emergencyWidget"));
const ScheduleWidget = dynamic(() => import("../../components/scheduleWidget"));
const DescriptionDisplayer = dynamic(() => import("../../components/description_displayer"));

const Image = dynamic(() => import("next/image"));
import Data from "../../lib/data";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";


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
