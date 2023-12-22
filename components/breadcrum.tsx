import Image from "next/image";
import Link from "next/link";

export default function BreadCrumb({ items }) {
  return (
    <nav>
      <ol className="breadcrumb mb-0">
        {items.map(({ to, label, active }) => (
          <li className={active ? "breadcrumb-item active" : "breadcrumb-item"} key={label}>
            {to ? <Link href={to}>{label}</Link> : label}
            
          </li>
        ))}
      </ol>
    </nav>
  );
}
