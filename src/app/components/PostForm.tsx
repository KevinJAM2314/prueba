"use client"

import "../styles/style.css"
import Swal from 'sweetalert2';
import { useState } from "react";
import { PostFormProps } from "../props/PostFormProps";
import Api from "../api/PostAPI";
import { Post } from "../types/Post";

const PostForm = ({name, create, post}: PostFormProps) => {
    const [userId, setUserId] = useState<number>(post?.userId || 1);
    const [title, setTitle] = useState<string>(post?.title || "");
    const [body, setBody] = useState<string>(post?.body || "");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newPost: Post = {
            id: post?.id || 0,
            userId: userId,
            title: title,
            body: body
        }

        let response; 

        if (post) {
            response = await Api.updatePost(post.id, newPost);
        } else {
            response = await Api.createPost(newPost);
        }

        if (response) {
            console.log(response)            
            Swal.fire({
                title: "Success!",
                text: "The operation was successful.",
                icon: "success",
                confirmButtonText: "OK",
                position: 'top',
                toast: true,
                showConfirmButton: false,
                timer: 1500
            });                     
        }
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>{name}</h2>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="body">Description</label>
                <textarea 
                    id="body" 
                    rows={6}
                    value={body} 
                    onChange={(e) => setBody(e.target.value)} 
                    required
                ></textarea>
            </div>
            
            {
                create?
                    <button type="submit" className="submit-btn">Add Post</button>
                : 
                    <button type="submit" className="submit-btn">Edit Post</button>
            }

        </form>
    );
};

export default PostForm;
