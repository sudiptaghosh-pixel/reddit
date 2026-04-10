// src/services/postService.js
// import API from "../api/axios";

import API from "../api/axios";

export const getPosts = () => API.get("/posts");

export const createPost = (data) => API.post("/posts", data);

export const likePost = (id) => API.put(`/posts/like/${id}`);