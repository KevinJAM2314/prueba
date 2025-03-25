"use client"

import "@/app/styles/style.css"
import { useContext } from "react";
import { PostContext } from "@/app/context/PostContext";
import { useParams } from 'next/navigation';
import PostForm from "@/app/components/PostForm"
import { Post } from "@/app/types/Post";

export default function UpdatePost() {
    const { id }: { id: string } = useParams();

    const context = useContext(PostContext);
    
    if (!context) {
        throw new Error("usePostContext must be used within a PostProvider");
    }
    
    const { posts } = context;
    
    const findPostById = (posts: Post[], id: number): Post | undefined => {
        return posts.find(post => post.id === id);
    };

    const post = findPostById(posts, Number(id));

    return (
        <div>
            {
                post?
                    <PostForm name={"Update Post"} create={false} post={post}/>
                :
                    <h1>No available post</h1>
            }
        </div>
    )
}