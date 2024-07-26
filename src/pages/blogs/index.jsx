import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <h2>My Blog Spot</h2>
      {posts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </>
  );
}
