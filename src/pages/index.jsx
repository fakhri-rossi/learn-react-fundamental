import Article from "../components/Article"
import posts from "../posts.json"


export default function Homepage(){
    return (
        <>
            <h1>Homepage</h1>

            <div>
                <h3>Cari artikel: </h3>
                <input type="text" name="" id="" />
            </div>

            {
                posts.map(({ title, tags, date }) => {
                    // return <Article title={title} tags={tags} date={date} />
                    // bisa disingkat kek gni:
                    return <Article { ...{ title, tags, date } } />
                })
            }
        </>
    )
}