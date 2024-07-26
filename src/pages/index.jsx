import { useState } from "react";
import Article from "../components/Article"
import postsData from "../posts.json"
import Search from "../components/Search";


export default function Homepage(){
    const [posts, setPosts] = useState(postsData);
    const [totalSearch, setTotalSearch] = useState(0);

    const doTriggerChange = (value) => {
        const filteredPosts = postsData.filter((item) => 
            item.title.toLowerCase().includes(value.toLowerCase())
        )
        setPosts(filteredPosts);
        setTotalSearch(filteredPosts.length)
    }

    return (
        <>
            <h1>Homepage</h1>

            <Search triggerChange={doTriggerChange} totalData={totalSearch} />

            {
                posts.map(({ title, tags, date, isNew }, index) => {
                    // return <Article title={title} tags={tags} date={date} />
                    // bisa disingkat kek gni:
                    return <Article { ...{ title, tags, date, isNew } } key={index} />
                })
            }
        </>
    )
}