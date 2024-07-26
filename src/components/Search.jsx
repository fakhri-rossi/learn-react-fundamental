import { useState } from "react"

export default function Search(props){
    const [search, setSearch] = useState("");

    const changeSearch = (event) => {
        setSearch(event.target.value);
        props.triggerChange(event.target.value);
    }
    
    return (
        <>
            <div>
                <h3>Cari artikel: </h3>
                <input type="text" onChange={ changeSearch } />
                <p>ditemukan {props.totalData} data dari pencarian {search}</p>
            </div>
        </>
    )
}