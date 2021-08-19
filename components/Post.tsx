import Link from "next/link";

export default function Post(props: any) {
  return (
    <div className="card">
      <img src={props.post.frontmatter.coverimage} alt="" />
      <div className="post-date">Posted on {props.post.frontmatter.date}</div>
      <h3>{props.post.frontmatter.title}</h3>
      <p>{props.post.frontmatter.excerpt}</p>
      <Link href={`/blog/${props.post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}
