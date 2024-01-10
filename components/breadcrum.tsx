import Image from "next/image";
import Link from "next/link";

export default function BreadCrumb({ items }) {
  return (
    <nav>
      <ol className="breadcrumb mb-0">
        {items.map(({ to, label, active }, index) => (
          <li
            className={active ? "breadcrumb-item active" : "breadcrumb-item"}
            key={`breadcrum-item-${index}`}
          >
            {to ? <Link href={to}>{label}</Link> : label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
