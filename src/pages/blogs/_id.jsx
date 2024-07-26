import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      <h2>{post?.title}</h2>
      <p>Params: {params.id}</p>
      <div>{post?.body}</div>
    </>
  );
}
