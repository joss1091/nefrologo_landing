import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Meta from "../components/meta";
import Link from "next/link";
import data from "../lib/data";
import EmergencyWidget from "../components/emergencyWidget";
import ScheduleWidget from "../components/scheduleWidget";
import BreadCrumb from "../components/breadcrum";
import Image from "next/image";

export default function AboutUs({
  allPosts: { edges },
  company,
  doctor,
  preview,
}) {
  return (
    <Layout preview={preview}>
      <Meta title={"Quienes somos"} />
      <Container>
        <section className="page-title page-title-layout5">
          <div className="bg-img">
            <Image
              width={430}
              height={600}
              src="/images/backgrounds/6.jpg"
              alt="background"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="pagetitle__heading">{doctor.name}</h1>
                <BreadCrumb
                  items={[
                    {
                      label: "Home",
                      to: "/",
                      active: false,
                    },
                    {
                      label: doctor.name,
                      active: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-120 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <aside className="sidebar has-marign-right">
                  <div className="widget widget-member ">
                    <div className="member mb-0">
                      <div className="member__img">
                        <Image
                          width={430}
                          height={600}
                          src={doctor.avatars.version3}
                          alt={doctor.name}
                        />
                      </div>
                      <div className="member__info">
                        <h5 className="member__name">
                          <a href="doctors-single-doctor1.html">
                            {doctor.name}
                          </a>
                        </h5>
                        <p className="member__job">{doctor.speciality}</p>
                        <p className="member__desc">{doctor.desciption}</p>
                        
                      </div>
                    </div>
                  </div>
                  <EmergencyWidget company={company} />
                  <ScheduleWidget company={company} />
                </aside>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="text-block mb-50">
                  <h5 className="text-block__title">Biografia</h5>
                  <p className="text-block__desc mb-20 font-weight-bold color-secondary">
                   {doctor.description}
                  </p>
                </div>
                <ul className="details-list list-unstyled mb-60">
                  <li>
                    <h5 className="details__title">Especialidad</h5>
                    <div className="details__content">
                      <p className="mb-0">{doctor.speciality} </p>
                    </div>
                  </li>
                  <li>
                    <h5 className="details__title">Grado</h5>
                    <div className="details__content">
                      <p className="mb-0">{doctor.degree} </p>
                    </div>
                  </li>
                  <li>
                    <h5 className="details__title">Certificaciones/cursos</h5>
                    <div className="details__content">
                      <ul className="list-items list-items-layout2 list-unstyled mb-0">
                        {doctor.certifications.map((certification, index) => (
                          <li key={index}>{certification}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <h5 className="details__title">Consultorio</h5>
                    <div className="details__content">
                      <p className="mb-0">{doctor.office}</p>
                    </div>
                  </li>
                  <li>
                    <h5 className="details__title">Universidad</h5>
                    <div className="details__content">
                      <p className="mb-0">{doctor.university}</p>
                    </div>
                  </li>
                </ul>
                <div className="text-block mb-40">
                  <h5 className="text-block__title">Educación Medica</h5>
                  <p className="text-block__desc mb-20">
                   
                  </p>
                </div>
                <div className="timeline-wrapper mb-60">
                  {doctor.medical_education.map(({year, title, description},index)=> (
                    <div className="timeline-item d-flex" key={`timeline-${index}`}>
                    <span className="timeline__year">{year}</span>
                    <div className="timeline__body">
                      <h4 className="timeline__title">
                        {title}
                      </h4>
                     
                    </div>
                  </div>
                  ))}
                  
                  
                </div>
                
                <section className="contact-layout4 bg-overlay bg-overlay-secondary-gradient pb-50 pb-50">
                  <div className="col-12">
                    <Link
                      href={data.company.appointment.url}
                      className="btn btn__primary btn__rounded btn__block btn__xhight mt-10"
                    >
                      <span>Agendar cita</span>{" "}
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                    <div className="contact-result"></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>

        {edges && (
          <MoreStories
            posts={edges}
            title={"Blog"}
            subtitle={"Articulos recientes"}
          />
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  const { company, doctor } = data;
  return {
    props: { allPosts, preview, company, doctor },
    revalidate: 10,
  };
};
