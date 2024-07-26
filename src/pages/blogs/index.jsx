import { useState, useEffect } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>My Blog Spot</h2>
      {posts.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}
