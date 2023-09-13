import Link from "next/link"


const fetchSinglePost = (id) => {

    //getStaticProsp
    // -> return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())    

    //getServerSideProps
    // -> return fetch('https://jsonplaceholder.typicode.com/posts', {cache : 'no-store}).then(res => res.json())


    //incremental static regeneration
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ children, params }) {
    const { id } = params
    const post = await fetchSinglePost(id)

    return (
        <article>
            <h2 style={{ color: 'grey' }}>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${id}/comments`} >Show comments</Link>
            {children}
        </article >
    )
}