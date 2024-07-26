import { useState } from "react";
import Article from "../components/Article"
import posts from "../posts.json"


export default function Homepage(){
    const [search, setSearch] = useState("");
    
    const changeSearch = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value)
    }

    return (
        <>
            <h1>Homepage</h1>

            <div>
                <h3>Cari artikel: </h3>
                <input type="text" onChange={ changeSearch } />
            </div>

            <p>text: {search}</p>

            {
                posts.map(({ title, tags, date }, index) => {
                    // return <Article title={title} tags={tags} date={date} />
                    // bisa disingkat kek gni:
                    return <Article { ...{ title, tags, date } } key={index} />
                })
            }
        </>
    )
}