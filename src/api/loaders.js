export const posts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const postById = ({ params }) => {
  const data = fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  console.log(data);
  return data;
};
