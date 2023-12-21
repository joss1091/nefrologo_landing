import styles from "./post-body.module.css";

export default function PostBody({ content }) {
  return (
    <div className="post__desc">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
