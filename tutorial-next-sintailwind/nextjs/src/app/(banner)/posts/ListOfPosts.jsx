import Link from "next/link"
import { LikeButton } from "./LikeButton"


const fetchPost = () => {
    //getStaticProsp
    // -> return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())    

    //getServerSideProps
    // -> return fetch('https://jsonplaceholder.typicode.com/posts', {cache : 'no-store}).then(res => res.json())


    //incremental static regeneration
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function ListOfPost() {
    const posts = await fetchPost()



    return (posts.slice(0, 5).map(post =>
        <article key={post.id}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`} >
                <h2 style={{ color: 'grey' }}>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id} />
            </Link>
        </article>)

    )

}