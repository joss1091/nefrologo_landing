import Image from "next/image";
import Link from "next/link";

export default function ServiceListWidget({ services }) {
  
  return (
    <div className="widget widget-services">
        <h5 className="widget__title">Servicios</h5>
        <div className="widget-content">
          <ul className="list-unstyled mb-0">
            {services.map(({name, slug}) => (
              <li>
              <Link href={`/servicios/${slug}`}>
                <span>{name}</span>
                <i className="icon-arrow-right"></i>
              </Link>
            </li>
            ))}
            
          </ul>
        </div>
      </div>
  );
}
