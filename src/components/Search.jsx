import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    props.triggerChange(search);
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div>
        <h3>Cari artikel: </h3>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeyDown}
        />
        <button onClick={changeSearch}>Cari</button>
        <p>
          ditemukan {props.totalData} data dari pencarian {search}
        </p>
      </div>
    </>
  );
}
