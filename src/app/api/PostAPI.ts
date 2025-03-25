import Api from "./MainAPI";
import { Post } from "../types/Post";
import { AxiosResponse } from "axios";

const getPosts = async (): Promise<Post[]> => {
    try {
        const response: AxiosResponse<Post[]> = await Api.get("posts");

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(`Request failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error("Failed to fetch posts.");
    }
};

const createPost = async (post: Post): Promise<Post> => {
    try {
        const response: AxiosResponse<Post> = await Api.post("posts", post);

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(`Post creation failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error creating post:", error);
        throw new Error("Failed to create post.");
    }
};

const updatePost = async (id: number, post: { title: string; body: string }): Promise<Post> => {
    try {
        const response: AxiosResponse<Post> = await Api.patch(`/posts/${id}`, post);

        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            throw new Error(`Post update failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error updating post:", error);
        throw new Error("Failed to update post.");
    }
};

export default { getPosts, createPost, updatePost };
