import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { CMS_NAME } from "../../lib/constants";
import Data from "../../lib/data";

export default function Index({ service: service, preview }) {
  
  
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`${service?.name}`}</title>
      </Head>
      <Container>
      <section className="page-title page-title-layout2 bg-overlay text-center pb-0">
      <div className="bg-img"><img src="assets/images/page-titles/3.jpg" alt="background" /></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
            <div className="pagetitle__icon">
              <i className="icon-microscope"></i>
            </div>
            <h1 className="pagetitle__heading">Pathology Clinic</h1>
            <p className="pagetitle__desc mb-30">Pathology is the study of disease. It is the bridge between science and
              medicine.
              It underpins every aspect of patient care, from diagnostic testing and treatment advice to using
              cutting-edge genetic technologies and preventing disease.
            </p>
            <a href="#content" className="scroll-down"><i className="fas fa-long-arrow-alt-down"></i></a>
          </div>
        </div>
      </div>
    </section>

    <section id="content" className=" pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="text-block mb-50">
              <p className="text-block__desc mb-20 font-weight-bold color-secondary">A neurologist is a medical doctor with
                specialized training
                in diagnosing, treating, and managing disorders of the brain and nervous system including, but not
                limited to, Alzheimer’s disease, amyotrophic lateral sclerosis (ALS), concussion, epilepsy, migraine,
                multiple sclerosis, Parkinson’s disease, and stroke.</p>
              <div className="video-banner-layout3 bg-overlay mb-50">
                <img src="assets/images/banners/7.jpg" alt="banner" />
                <a className="video__btn video__btn-white popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                  <div className="video__player">
                    <i className="fa fa-play"></i>
                  </div>
                </a>
              </div>
              <p className="text-block__desc mb-20">These teams are made up of pathologists – who are either doctors with
                specialist laboratory training or scientists with specialist clinical training – as well as biomedical
                scientists and support staff. Doctors, nurses, surgeons and other medical staff look to pathologists and
                consultant clinical scientists for advice on the nature and seriousness of a patient’s illness, making
                sure they get the most appropriate treatment. We will work with you to develop individualised care
                plans, including management of chronic diseases.</p>
              <p className="text-block__desc mb-20">If we cannot assist, we can provide referrals or advice about the type
                of practitioner you require. We are committed to being the region’s premier healthcare network by
                providing patient-centered care that inspires clinical and service excellence, making us the first and
                best choice for our patients, employees, physicians, employers, volunteers and communities.</p>
            </div>

            <ul className="list-items list-unstyled mb-60 pl-40">
              <li>If your blood doesn’t clot properly – it’s a haematologist who will conduct the blood tests, confirm
                if you have haemophilia, and offer treatment.</li>
              <li>When there’s an outbreak of infection in a hospital, it’s a medical microbiologist or infection doctor
                who will advise the infection control teams and work hard to contain it.</li>
              <li>For those having trouble getting pregnant – it’s a reproductive scientist who will investigate,
                diagnose and, where possible, treat any infertility issues.</li>
            </ul>
            <div className="widget-plan mb-60">
              <div className="widget__body">
                <h5 className="widget__title">Health Care Plans</h5>
                <p>Our doctors include highly qualified male and female practitioners who come from a range of
                  backgrounds
                  and bring with a diversity of skills and special interests. Our administration and support staff all
                  have exceptional people skills and trained to assist you with all medical enquiries.
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
                <div className="plan__price">$50<span className="period">/Month</span></div>
                <div className="d-flex align-items-center">
                  <a href="#" className="btn btn__secondary btn__rounded mr-30">
                    <span>Purchase Now</span> <i className="icon-arrow-right"></i>
                  </a>
                  <a href="#" className="btn btn__primary btn__link">
                    <i className="icon-arrow-right icon-filled"></i> <span>Explore Other Plans</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-block mb-50">
              <h5 className="text-block__title">Our Core Values</h5>
              <p className="text-block__desc mb-20">Today the hospital is recognised as a world renowned institution, not
                only providing outstanding care and treatment, but improving the outcomes for all through a
                comprehensive medical research. For over 20 years, our hospital has touched lives of millions of people,
                and provide care and treatment for the sickest in our community including rehabilitation and aged care.
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
                      <p className="fancybox__desc">Recognised as a world renowned institution, you can consult any of our
                        doctors by visiting our clinic.</p>
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
                      <p className="fancybox__desc">Free or low cost coverage adults with limited income recognised as a
                        world renowned institution.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  
                  <div className="fancybox-item d-flex">
                    <div className="fancybox__icon">
                      <i className="icon-call3"></i>
                    </div>
                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Emergency Help 24/7 </h4>
                      <p className="fancybox__desc">Contact our reception staff with any medical enquiry any time for low
                        cost coverage adults.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  
                  <div className="fancybox-item d-flex">
                    <div className="fancybox__icon">
                      <i className="icon-drugs"></i>
                    </div>
                    <div className="fancybox__content">
                      <h4 className="fancybox__title">Research Professionals </h4>
                      <p className="fancybox__desc">All medical aspects practice for family, our reception staff with any
                        medical enquiry any time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-block mb-50">
              <h5 className="text-block__title">Health Tips & Info</h5>
              <p className="text-block__desc mb-20">We help create a care plan that addresses your specific condition and we
                are here to answer all of your questions & acknowledge your concerns. Today the hospital is recognised
                as a world renowned institution, not only providing outstanding care and treatment, but improving the
                outcomes.
              </p>
            </div>
            <div id="accordion" className="mb-70">
              <div className="accordion-item opened">
                <div className="accordion__header" data-toggle="collapse" data-target="#collapse3">
                  <a className="accordion__title" href="#">What Payment Methods Are Available?</a>
                </div>
                <div id="collapse3" className="collapse show" data-parent="#accordion">
                  <div className="accordion__body">
                    <p>With any financial product that you buy, it is important that you know you are getting the best
                      advice from a reputable company as often</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion__header" data-toggle="collapse" data-target="#collapse1">
                  <a className="accordion__title" href="#">Which Plan Is Right For Me?</a>
                </div>
                <div id="collapse1" className="collapse" data-parent="#accordion">
                  <div className="accordion__body">
                    <p>With any financial product that you buy, it is important that you know you are getting the best
                      advice from a reputable company as often</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion__header" data-toggle="collapse" data-target="#collapse2">
                  <a className="accordion__title" href="#">Do I have to commit to a contract?</a>
                </div>
                <div id="collapse2" className="collapse" data-parent="#accordion">
                  <div className="accordion__body">
                    <p>With any financial product that you buy, it is important that you know you are getting the best
                      advice from a reputable company as often</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion__header" data-toggle="collapse" data-target="#collapse4">
                  <a className="accordion__title" href="#">What if I pick the wrong plan?</a>
                </div>
                <div id="collapse4" className="collapse" data-parent="#accordion">
                  <div className="accordion__body">
                    <p>With any financial product that you buy, it is important that you know you are getting the best
                      advice from a reputable company as often</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion__header" data-toggle="collapse" data-target="#collapse5">
                  <a className="accordion__title" href="#">Any contracts or commitments?</a>
                </div>
                <div id="collapse5" className="collapse" data-parent="#accordion">
                  <div className="accordion__body">
                    <p>With any financial product that you buy, it is important that you know you are getting the best
                      advice from a reputable company as often</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-block mb-50">
              <h5 className="text-block__title">Our Core Values</h5>
              <p className="text-block__desc mb-20">Today the hospital is recognised as a world renowned institution, not
                only providing outstanding care and treatment, but improving the outcomes for all through a
                comprehensive medical research. For over 20 years, our hospital has touched lives of millions of people,
                and provide care and treatment for the sickest in our community including rehabilitation and aged care.
              </p>
            </div>
            <div className="row">
              <div className="collg-12 col-md-6">
                <div className="pricing-widget-layout1 mb-70">
                  <h5 className="pricing__title">Investigations Price List</h5>
                  <ul className="pricing__list list-unstyled mb-0">
                    <li><span>Umbilical Cord Appearance</span><span className="price">$50</span></li>
                    <li><span>Cardiac Electrophysiology</span><span className="price">$45</span></li>
                    <li><span>Repositioning Techniques</span><span className="price">$60</span></li>
                    <li><span>Geriatric Neurology</span><span className="price">$65</span></li>
                    <li><span>Nuclear Cardiology</span><span className="price">$40</span></li>
                    <li><span>Nuclear Cardiology</span><span className="price">$55</span></li>
                  </ul>
                </div>
              </div>
              <div className="collg-12 col-md-6">
                <div className="pricing-widget-layout2 mb-70">
                  <h5 className="pricing__title">Treatments Price List</h5>
                  <ul className="pricing__list list-unstyled mb-0">
                    <li><span>Colonoscopy</span><span className="price">$50</span></li>
                    <li><span>Allergy testing</span><span className="price">$45</span></li>
                    <li><span>Gastroscopy</span><span className="price">$60</span></li>
                    <li><span>Bronchoscopy</span><span className="price">$65</span></li>
                    <li><span>Cardiac Ablation</span><span className="price">$40</span></li>
                    <li><span>Holter monitoring</span><span className="price">$55</span></li>
                  </ul>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar has-marign-left sticky-top">
              <div className="widget widget-services">
                <h5 className="widget__title">Medical Services</h5>
                <div className="widget-content">
                  <ul className="list-unstyled mb-0">
                    <li><a href="#"><span>Neurology Clinic</span><i className="icon-arrow-right"></i></a></li>
                    <li><a href="#"><span>Cardiology Clinic</span><i className="icon-arrow-right"></i></a></li>
                    <li><a href="#"><span>Pathology Clinic</span><i className="icon-arrow-right"></i></a></li>
                    <li><a href="#"><span>Laboratory Clinic</span><i className="icon-arrow-right"></i></a></li>
                    <li><a href="#"><span>Pediatric Clinic</span><i className="icon-arrow-right"></i></a></li>
                    <li><a href="#"><span>Cardiac Clinic</span><i className="icon-arrow-right"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-help bg-overlay bg-overlay-secondary-gradient">
                <div className="bg-img"><img src="assets/images/banners/5.jpg" alt="background" /></div>
                <div className="widget-content">
                  <div className="widget__icon">
                    <i className="icon-call3"></i>
                  </div>
                  <h4 className="widget__title">Emergency Cases</h4>
                  <p className="widget__desc">Please feel welcome to contact our friendly reception staff with any general
                    or medical enquiry call us.
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
                    <li><span>Monday - Friday</span><span>8.00 - 7:00 pm</span></li>
                    <li><span>Saturday</span><span>9.00 - 10:00 pm</span></li>
                    <li><span>Sunday</span><span>10.00 - 12:00 pm</span></li>
                  </ul>
                </div>
              </div>
              
            </aside>
          </div>
        </div>
      </div>
    </section>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params,preview = false }) => {
  const service = Data.services.find((service) => service.slug == params?.slug);

  return {
    props: { service, preview },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  
  
  return {
    paths: Data.services.map(({ slug }) => `/servicios/${slug}`) || [],
    fallback: true,
  };
};
