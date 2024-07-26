function Article(props) {
  //   const name = "rossi";
  //   const titles = ["Book", "Recipes", "Vehicles"];

  return (
    <>
      <h3>{props.title}</h3>

      <small>Date: {props.date}, tags: {props.tags.join(", ")}</small>

      {/* <div>
        Subjects:
        <div>
          {props.subjects.map((subject) => {
            return <div>{subject}</div>;
          })}
        </div>
      </div> */}
    </>
  );
}

export default Article;
