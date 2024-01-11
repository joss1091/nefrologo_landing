import Image from "next/image";
import Link from "next/link";
export default function DescriptionDisplayer({
  type,
  content,
  details,
  company,
}) {
  switch (type) {
    case "text":
      return (
        <div className="text-block mb-50">
          {content.title && (
            <h5 className="text-block__title">{content.title}</h5>
          )}
          <p className="text-block__desc mb-20 ">{content.text}</p>
        </div>
      );
    case "textWithList":
      return (
        <div className="text-block mb-50">
        {content.title && (
            <h5 className="text-block__title">{content.title}</h5>
          )}
          <p className="text-block__desc mb-20 ">{content.text}</p>
          <ul className="list-items list-unstyled mb-60 pl-40">
            {details.items.map((item, index) => (
              <li key={`item-description-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "widgetWithList":
      return (
        <>
          <div className="widget-plan mb-60">
            <div className="widget__body">
              <h5 className="widget__title">Health Care Plans</h5>
              <p>
                Our doctors include highly qualified male and female
                practitioners who come from a range of backgrounds and bring
                with a diversity of skills and special interests. Our
                administration and support staff all have exceptional people
                skills and trained to assist you with all medical enquiries.
              </p>
              <div className="row">
                {details.groupItems.map((groupItem, index) => (
                  <div className="col-sm-12 col-md-6" key={`group-item-${index}`}>
                    <div className="plan__items">
                      <ul className="list-items list-items-layout2 list-unstyled mb-0">
                        {groupItem.map((text, index) => (
                          <li key={`widget-item-${index}`}>{text}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="widget__footer d-flex flex-wrap justify-content-between align-items-center">
              <div className="plan__price"></div>
              <div className="d-flex align-items-center">
                {details.button == "appointment" && (
                  <Link
                    href={company.appointment.url}
                    target="_blank"
                    className="btn btn__secondary btn__rounded mr-30"
                  >
                    <span>Agendar cita</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </>
      );
    case "cardItems":
      return (
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
                    Recognised as a world renowned institution, you can consult
                    any of our doctors by visiting our clinic.
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
                  <h4 className="fancybox__title">Emergency Help 24/7 </h4>
                  <p className="fancybox__desc">
                    Contact our reception staff with any medical enquiry any
                    time for low cost coverage adults.
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
                  <h4 className="fancybox__title">Research Professionals </h4>
                  <p className="fancybox__desc">
                    All medical aspects practice for family, our reception staff
                    with any medical enquiry any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "image":
      return (
        <div className="video-banner-layout3 bg-overlay mb-50">
          <Image
            src={content}
            width={details.width}
            height={details.height}
            alt={details.alt}
          />
        </div>
      );
  }
}
