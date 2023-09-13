import { Suspense } from "react"
import ListOfPost from "./ListOfPosts"



export default async function PostsPage() {

    return (<section>
        <Suspense fallback={<h4 style={{ color: '#00A86B' }}>Loading Posts...</h4>}>
            <ListOfPost />
        </Suspense>
    </section>)

}