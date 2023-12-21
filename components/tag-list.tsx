import Link from "next/link";

export default function TagList({ tags }) {
  return (
    <ul className="list-unstyled mb-0">
      {tags.edges.map(({ node }) => (
        <li key={node.name}>
          <Link href={`/tags/${node.slug}`}>{node.name}</Link>
        </li>
      ))}
    </ul>
  );
}
