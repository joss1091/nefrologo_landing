
import BreadCrumb from "./breadcrum";
import Image from "next/image";

export default function SectionHeader({ breadcrumItems, title }) {
  return (
    <section className="page-title page-title-layout5 bg-overlay">
      <div className="bg-img">
        <Image
          width={430}
          height={600}
          src="/images/page-titles/8.jpg"
          alt="background"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="pagetitle__heading">{title}</h1>
            <BreadCrumb items={breadcrumItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
