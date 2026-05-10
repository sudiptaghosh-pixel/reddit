import API from "../api/axios";

export const getComments = (postId) =>
  API.get(`/comments/${postId}`);

export const addComment = (data) =>
  API.post("/comments", data);