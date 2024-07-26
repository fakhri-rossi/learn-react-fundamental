function Article({ title, date, tags }) {

  return (
    <>
      <h3>{title}</h3>

      <small>Date: {date}, tags: {tags.join(", ")}</small>
      
    </>
  );
}

export default Article;
