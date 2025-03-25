"use client"

import React, { useState, useEffect, ReactNode } from "react";
import { PostContext } from "../context/PostContext";
import { Post } from "../types/Post";
import Api from "../api/PostAPI";

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await Api.getPosts();
      if (response) {
        setPosts(response);
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
