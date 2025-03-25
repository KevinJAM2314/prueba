import React from "react";
import { Post } from "../types/Post";

export const PostContext = React.createContext<{
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
} | undefined>(undefined);