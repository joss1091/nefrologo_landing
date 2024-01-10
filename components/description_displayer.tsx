import Image from "next/image";
export default function DescriptionDisplayer({ type, content, details }) {
  switch (type) {
    case "text":
      return <p className="text-block__desc mb-20 ">{content}</p>;
    case "textWithList":
      return (
        <>
          <p className="text-block__desc mb-20 ">{content}</p>
          <ul className="list-items list-unstyled mb-60 pl-40">
            {details.items.map((item, index) => (
              <li key={`item-description-${index}`}>{item}</li>
            ))}
          </ul>
        </>
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
