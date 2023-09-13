import Link from "next/link"
import Image from "next/image"

const imageStyle = {
    borderRadius: '50%'
}

const fetchComments = async (id) => {
    await new Promise(resolve => setTimeout(resolve, 2000))


    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function Post({ params }) {
    const { id } = params
    const comments = await fetchComments(id)

    return (
        <ul style={{ background: '#444', fontSize: '10px' }}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image width='25' height='25' style={imageStyle} src={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${comment.email}`} alt={comment.name} />
                    <h3>{comment.name}</h3>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}