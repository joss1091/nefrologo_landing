import Link from "next/link";
import Image from "next/image";
export default function PrevioutNextPostPreview({ post, label, arrow }) {
  return (
    <>
      {post ? (
        <Link
          href={`/posts/${post.slug}`}
          className={
            arrow == "prev"
              ? "widget-nav__prev d-flex flex-wrap"
              : "widget-nav__next d-flex flex-wrap"
          }
        >
          <div className="widget-nav__img">
            <Image
              width={90}
              height={90}
              src={post.featuredImage?.node.sourceUrl}
              alt={post.title}
            />
          </div>
          <div className="widget-nav__content">
            <span>{label}</span>
            <h5 className="widget-nav__ttile mb-0">{post.title}</h5>
          </div>
        </Link>
      ) : null}
    </>
  );
}
