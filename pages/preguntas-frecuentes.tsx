import { GetStaticProps } from "next";
import Container from "../components/container";

import Layout from "../components/layout";
import Data from "../lib/data";
import Questions from "../components/questions";
import Meta from "../components/meta";
import EmergencyWidget from "../components/emergencyWidget";
import ScheduleWidget from "../components/scheduleWidget";
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
