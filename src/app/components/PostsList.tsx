"use client"

import "../styles/style.css"
import Link from "next/link";
import { useContext } from "react"
import { PostContext } from "../context/PostContext"

const PostsList = () => {
    const context = useContext(PostContext);

    if (!context) {
        throw new Error("usePostContext must be used within a PostProvider");
    }

    const { posts } = context;
    
    const updatePost = ()=> {

    }

    return (
        <div>
            {posts.length ? (
                <div className="card-container">
                    {posts.map(post => (
                        <div className="card" key={post.id}>
                            <h2 className="card-title">{post.title}</h2>
                            <p className="card-content">
                                {post.body}
                            </p>
                            <Link href={`/posts/update/${post.id}`} className="edit-btn">
                                Editar
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <h1>No posts available</h1>
            )}
        </div>
    )
}

export default PostsList;