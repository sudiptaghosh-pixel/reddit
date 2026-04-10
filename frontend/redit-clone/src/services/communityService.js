// src/services/communityService.js
import API from "../api/axios";

export const getCommunities = () => API.get("/communities");

export const createCommunity = (data) =>
  API.post("/communities", data);