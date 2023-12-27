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
            <img
              src="https://7oroof.com/demos/medcity/assets/images/backgrounds/6.jpg"
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
                        <img src={doctor.avatar} alt={doctor.name} />
                      </div>
                      <div className="member__info">
                        <h5 className="member__name">
                          <a href="doctors-single-doctor1.html">
                            {doctor.name}
                          </a>
                        </h5>
                        <p className="member__job">{doctor.speciality}</p>
                        <p className="member__desc">{doctor.desciption}</p>
                        <div className="mt-20 d-flex flex-wrap justify-content-between align-items-center">
                          <ul className="social-icons list-unstyled mb-0">
                            <li>
                              <a href="#" className="facebook">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="twitter">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <Link
                                href={`tel:+52${company.appointment.phone}`}
                                className="phone"
                              >
                                <i className="fas fa-phone-alt"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <EmergencyWidget company={company} />
                  <ScheduleWidget company={company} />
                </aside>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8">
                <div className="text-block mb-50">
                  <h5 className="text-block__title">Biography</h5>
                  <p className="text-block__desc mb-20 font-weight-bold color-secondary">
                    A neurologist is a medical doctor with specialized training
                    in diagnosing, treating, and managing disorders of the brain
                    and nervous system including, but not limited to,
                    Alzheimer’s disease, amyotrophic lateral sclerosis (ALS),
                    concussion, epilepsy, migraine, multiple sclerosis,
                    Parkinson’s disease, and stroke.
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
                    <h5 className="details__title">Degrees</h5>
                    <div className="details__content">
                      <p className="mb-0">M.D. of Medicine </p>
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
                    <h5 className="details__title">Office</h5>
                    <div className="details__content">
                      <p className="mb-0">{company.location.address}</p>
                    </div>
                  </li>
                  <li>
                    <h5 className="details__title">University</h5>
                    <div className="details__content">
                      <p className="mb-0">Harvard University</p>
                    </div>
                  </li>
                </ul>
                <div className="text-block mb-50">
                  <h5 className="text-block__title">Doctor’s Services</h5>
                  <p className="text-block__desc mb-20">
                    He actively participates in clinical research trials and has
                    been published in peer reviewed journals such as the Journal
                    of the State Medical Society and Baylor University Medical
                    Center’s Proceedings. At Hahnemann Hospital in conjunction
                    with Drexel University, where he received extensive training
                    in coronary as well as peripheral interventions and limb
                    salvage procedures.
                  </p>
                </div>
                <div className="pricing-widget-layout3 mb-70">
                  <h5 className="pricing__title">Treatments Price List</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="pricing__list list-unstyled mb-0">
                        <li>
                          <span>Umbilical Cord Appearance</span>
                          <span className="price">$50</span>
                        </li>
                        <li>
                          <span>Cardiac Electrophysiology</span>
                          <span className="price">$45</span>
                        </li>
                        <li>
                          <span>Repositioning Techniques</span>
                          <span className="price">$60</span>
                        </li>
                        <li>
                          <span>Geriatric Neurology</span>
                          <span className="price">$65</span>
                        </li>
                        <li>
                          <span>Nuclear Cardiology</span>
                          <span className="price">$40</span>
                        </li>
                        <li>
                          <span>Nuclear Cardiology</span>
                          <span className="price">$55</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="pricing__list list-unstyled mb-0">
                        <li>
                          <span>Umbilical Cord Appearance</span>
                          <span className="price">$50</span>
                        </li>
                        <li>
                          <span>Cardiac Electrophysiology</span>
                          <span className="price">$45</span>
                        </li>
                        <li>
                          <span>Repositioning Techniques</span>
                          <span className="price">$60</span>
                        </li>
                        <li>
                          <span>Geriatric Neurology</span>
                          <span className="price">$65</span>
                        </li>
                        <li>
                          <span>Nuclear Cardiology</span>
                          <span className="price">$40</span>
                        </li>
                        <li>
                          <span>Nuclear Cardiology</span>
                          <span className="price">$55</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-block mb-50">
                  <h5 className="text-block__title">Awards And Honours</h5>
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
                <div className="fancybox-layout2">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-diploma"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">Edison Awards</h4>
                          <p className="fancybox__desc">
                            Honoring excellence in innovation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-diploma"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">Edwin Grant Medal</h4>
                          <p className="fancybox__desc">
                            Research in developmental biology
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-diploma"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">
                            Robert L. Noble Prize
                          </h4>
                          <p className="fancybox__desc">
                            Canadian Cancer Society
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="fancybox-item d-flex">
                        <div className="fancybox__icon">
                          <i className="icon-diploma"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">
                            National Prize for Medicine
                          </h4>
                          <p className="fancybox__desc">
                            Chilean Academy of Medicine etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-block mb-40">
                  <h5 className="text-block__title">Medical Education</h5>
                  <p className="text-block__desc mb-20">
                    She then went to LSU Medical School in New Orleans where she
                    was an Honors Program Graduate and finished in the top
                    quartile of his graduating class. She completed his Internal
                    Medicine Residency at the University of Alabama in
                    Birmingham, AL where he was selected as a Chief Internal
                    Medicine Resident.
                  </p>
                </div>
                <div className="timeline-wrapper mb-60">
                  <div className="timeline-item d-flex">
                    <span className="timeline__year">2020</span>
                    <div className="timeline__body">
                      <h4 className="timeline__title">
                        Royal College of Surgeons of Harvard
                      </h4>
                      <p className="timeline__desc mb-0">
                        We partner with you to enable your technology so that
                        you can focus on your organization’s mission leverage
                        our talent, and creativity to help your business succeed
                        above all your business competitors.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item d-flex">
                    <span className="timeline__year">2015</span>
                    <div className="timeline__body">
                      <h4 className="timeline__title">
                        Fellowship, Royal College of Physicians of Harvard
                      </h4>
                      <p className="timeline__desc mb-0">
                        After relocating to Louisiana she served as Director of
                        the Cardiac Catheterization Lab at Regional Medical
                        Center of Acadiana. She was honored by the Medical
                        Association for Physician's Recognition Award from March
                        of 2015 through May 2016.
                      </p>
                    </div>
                  </div>
                  <div className="timeline-item d-flex">
                    <span className="timeline__year">2015</span>
                    <div className="timeline__body">
                      <h4 className="timeline__title">
                        Residency, St. Harvard University Hospital
                      </h4>
                      <p className="timeline__desc mb-0">
                        Dr has also had professional accomplishments at the
                        University of Southern California School of Medicine and
                        Medical Center including Instructor of Medicine, Chief
                        Administrative Fellow, Division of Cardiology University
                        of Southern California.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-block mb-40">
                  <h5 className="text-block__title">Doctor’s Skills</h5>
                  <p className="text-block__desc mb-20">
                    He completed his Internal Medicine Residency at the
                    University of Alabama in Birmingham, AL where he was
                    selected as a Chief Internal Medicine Resident. He then went
                    to LSU Medical School in New Orleans where he was an Honors
                    Program Graduate and finished in the top quartile of his
                    graduating class.
                  </p>
                </div>
                <div className="animated-Progressbars mb-60">
                  <div className="progress-item">
                    <h5 className="progress__title">Cardiac Rehabilitation</h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar">
                        <span className="progress__percentage"></span>
                      </div>
                    </div>
                  </div>

                  <div className="progress-item">
                    <h5 className="progress__title">Nuclear Cardiology</h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar">
                        <span className="progress__percentage"></span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-item">
                    <h5 className="progress__title">Neurocritical Care</h5>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar">
                        <span className="progress__percentage"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <section className="contact-layout4 bg-overlay bg-overlay-secondary-gradient pb-50 pb-50">
                  <div className="col-12">
                    <Link
                      href={data.company.appointment.url}
                      className="btn btn__primary btn__rounded btn__block btn__xhight mt-10"
                    >
                      <span>Agendar cita</span>{" "}
                      <i className="icon-arrow-right"></i>
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
