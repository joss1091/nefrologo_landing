import { GetStaticProps } from "next";
import Data from "../lib/data";
import dynamic from "next/dynamic";

const Container = dynamic(() => import("../components/container"), {
  ssr: false,
});
const Layout = dynamic(() => import("../components/layout"), {
  ssr: false,
});
const Questions = dynamic(() => import("../components/questions"), {
  ssr: false,
});
const Meta = dynamic(() => import("../components/meta"), {
  ssr: false,
});
const EmergencyWidget = dynamic(() => import("../components/emergencyWidget"), {
  ssr: false,
});
const ScheduleWidget = dynamic(() => import("../components/scheduleWidget"), {
  ssr: false,
});

export default function Faqs({ faqs, company, preview }) {
  return (
    <Layout preview={preview}>
      <Meta title={"Preguntas Frecuentes"} />
      <Container>
        <section className="faq pt-120 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar has-marign-right">
                  <EmergencyWidget company={company} />
                  <ScheduleWidget company={company} />
                </aside>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8">
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
  const { faqs, company } = Data;

  return {
    props: { faqs, preview, company },
    revalidate: 10,
  };
};
