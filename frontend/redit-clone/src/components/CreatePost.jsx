import { useEffect, useState } from "react";
import { getCommunities, createCommunity } from "../services/communityService";
import { createPost, getPosts } from "../services/postService";

const CreatePost = ({ onClose }) => {
  const [communities, setCommunities] = useState([]);
  const [communityId, setCommunityId] = useState("");
  const [newCommunity, setNewCommunity] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    const res = await getCommunities();
    setCommunities(res.data);
  };

  // Create new community
  const handleCreateCommunity = async () => {
    if (!newCommunity) return;

    const res = await createCommunity({ name: newCommunity });
    setCommunityId(res.data._id);
    setNewCommunity("");
    fetchCommunities();
  };

  // Create Post
  const handlePost = async () => {
    if (!title || !communityId) {
      alert("Title and community required");
      return;
    }

    await createPost({
      content: `${title}\n${content}`,
      communityId,
    });

    alert("Post created 🚀");
    await getPosts();// optional: refresh feed later
    onClose();
  };

  return (
<div className="fixed inset-0 bg-black/70 flex justify-center items-start pt-16 z-50">
  <div
    className="bg-[#0b1416] text-white p-6 rounded-xl overflow-y-auto"
    style={{
      width: "1084px",
      height: "529px",
    }}
  >

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create post</h1>
        <button onClick={onClose} className="text-gray-400">✕</button>
      </div>

      {/* Community Select */}
      <div className="mb-6">
        <select
          value={communityId}
          onChange={(e) => setCommunityId(e.target.value)}
          className="bg-[#1a2a2d] px-4 py-2 rounded-full"
        >
          <option value="">Select a community</option>
          {communities.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Create Community */}
        <div className="flex gap-2 mt-3">
          <input
            placeholder="Create new community"
            value={newCommunity}
            onChange={(e) => setNewCommunity(e.target.value)}
            className="bg-[#1a2a2d] px-3 py-2 rounded-lg"
          />
          <button
            onClick={handleCreateCommunity}
            className="bg-blue-500 px-3 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>

      {/* Title */}
      <input
        placeholder="Title *"
        maxLength={300}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-[#1a2a2d] px-4 py-3 rounded-full mb-4 outline-none"
      />

      {/* Body */}
      <textarea
        placeholder="Body text (optional)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-[#1a2a2d] p-4 rounded-xl h-40 outline-none"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        {/* <button className="bg-gray-700 px-4 py-2 rounded-full">
          Save Draft
        </button> */}
        <button
          onClick={handlePost}
          className="bg-orange-500 px-4 py-2 rounded-full"
        >
          Post
        </button>
      </div>
      </div>
    </div>
  );
};

export default CreatePost;