import "@/app/styles/style.css"
import PostForm from "@/app/components/PostForm"

export default function CreatePost() {
    return (
        <div>
            <PostForm name={"New Post"} create={true} />
        </div>
    )
}