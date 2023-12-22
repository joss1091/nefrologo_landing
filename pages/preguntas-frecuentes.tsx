import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { CMS_NAME } from "../lib/constants";
import Header from "../components/header"
import MainSlider from "../components/main_slider";
import ContactInfo from "../components/contact_info";
import AboutLayout from "../components/about_layout";
import ServicesLayout from "../components/services_layout";
import FeaturesLayout from "../components/features_layout";
import TeamLayout from "../components/team_layout";
import WorkProcessLayout from "../components/work_process_layout";
import { getAllPostsForHome } from "../lib/api";

export default function Faqs({ allPosts: { edges }, preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
      <Header />
      <section className="faq pt-120 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar has-marign-right">
              <div className="widget widget-help bg-overlay bg-overlay-secondary-gradient">
                <div className="bg-img"><img src="https://7oroof.com/demos/medcity/assets/images/banners/5.jpg" alt="background" /></div>
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
              <div className="widget widget-reports">
                <a href="#" className="btn btn__primary btn__block">
                  <i className="icon-pdf-file"></i>
                  <span>2020 Patient Reports</span>
                </a>
              </div>
            </aside>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8" id="accordion">
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
        </div>
      </div>
    </section>

      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
