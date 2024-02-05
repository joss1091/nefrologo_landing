import Link from "next/link";

export default function SlideItem({service}) {
  return (
    <div className="service-item" >
    <div className="service__icon">
      <i className={service.icon || "fa fa-user-doctor"}></i>
      <i className={service.icon || "fa fa-user-doctor"}></i>
    </div>
    <div className="service__content">
      <h4 className="service__title">{service.name}</h4>
      <p className="service__desc">
        {service.short_description.content}
      </p>
      <ul className="list-items list-items-layout1 list-unstyled">
        {service.short_description.items.map((item, index) => (
           <li key={index}>{item}</li>
        ))}
      </ul>
      <Link href={`/servicios/${service.slug}`} className="btn btn__secondary btn__outlined btn__rounded">
        <span>Leer más</span>
        <i className="fa fa-arrow-right"></i>
      </Link>
    </div>
  </div>
  );
}
