import Image from "next/image";
import Link from "next/link";

export default function ScheduleWidget({ company }) {
  return (
    <div className="widget widget-schedule">
      <div className="widget-content">
        <div className="widget__icon">
          <i className="icon-charity2"></i>
        </div>
        <h4 className="widget__title">Horarios</h4>
        <ul className="time__list list-unstyled mb-0">
          {company.short_schedule.map(({ text, details }, index) => (
            <li key={index}>
              <span>{text}</span>
              <span>
                {details.closed ? "Cerrado" : `${details.from} - ${details.to}`}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
