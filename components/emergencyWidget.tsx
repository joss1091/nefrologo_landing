import Image from "next/image";

export default function EmergencyWidget({ company }) {
  return (
    <div className="widget widget-help bg-overlay bg-overlay-secondary-gradient">
      <div className="bg-img">
        <Image
          width={430}
          height={600}
          src="/images/banners/5.jpg"
          alt="background"
        />
      </div>
      <div className="widget-content">
        <div className="widget__icon">
          <i className="fa fa-phone-volume"></i>
        </div>
        <h4 className="widget__title">Atención</h4>
        <p className="widget__desc">
          Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
        </p>
        <a href={`tel:+52${company.appointment.phone}`} className="phone__number">
          <i className="fa fa-phone"></i> <span>{company.appointment.phone}</span>
        </a>
      </div>
    </div>
  );
}
