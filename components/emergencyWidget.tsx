import Image from "next/image";
import Link from "next/link";

export default function EmergencyWidget({ company }) {
  return (
    <div className="widget widget-help bg-overlay bg-overlay-secondary-gradient">
      <div className="bg-img">
        <img
          src="https://7oroof.com/demos/medcity/assets/images/banners/5.jpg"
          alt="background"
        />
      </div>
      <div className="widget-content">
        <div className="widget__icon">
          <i className="icon-call3"></i>
        </div>
        <h4 className="widget__title">Emergencia</h4>
        <p className="widget__desc">
          Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
        </p>
        <a href={`tel:+52${company.appointment.phone}`} className="phone__number">
          <i className="icon-phone"></i> <span>{company.appointment.phone}</span>
        </a>
      </div>
    </div>
  );
}
