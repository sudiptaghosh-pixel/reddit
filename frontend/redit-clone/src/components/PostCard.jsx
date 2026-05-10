import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  Share2,
} from "lucide-react";
import { likePost } from "../services/postService";
import { useState, useEffect } from "react";
import { getComments, addComment } from "../services/commentService";

const PostCard = ({ post }) => {
  const [openComments, setOpenComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleLike = async () => {
    await likePost(post._id);
  };

  const fetchComments = async () => {
    const res = await getComments(post._id);
    setComments(res.data);
  };

  const handleAddComment = async () => {
    if (!text) return;

    await addComment({
      postId: post._id,
      text,
    });

    setText("");
    fetchComments();
  };

  useEffect(() => {
    if (openComments) {
      fetchComments();
    }
  }, [openComments]);

  return (
    <div className="bg-[#0f1a1c] border border-gray-800 rounded-xl p-4 max-w-2xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        {/* <img src={post.user?.avatar} className="w-6 h-6 rounded-full" /> */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold uppercase">
          {post.user?.username?.charAt(0)}
        </div>

        <span className="text-white font-medium">
          r/{post.community?.name}
        </span>
        <span>• {new Date(post.createdAt).toLocaleString()}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-white mb-2">
        {post.content?.split("\n")[0]}
      </h2>

      {/* Body */}
      <p className="text-gray-300 text-sm">
        {post.content?.split("\n")[1]}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-6 mt-4 text-gray-400 text-sm">

        {/* Like */}
        <div
          onClick={handleLike}
          className="flex items-center gap-2 bg-[#1a2a2d] px-3 py-1 rounded-full cursor-pointer"
        >
          <ArrowUp size={16} />
          <span>{post.likes.length}</span>
          <ArrowDown size={16} />
        </div>

        {/* Comment Toggle */}
        <div
          onClick={() => setOpenComments(!openComments)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <MessageCircle size={16} />
          <span>{comments.length}</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Share2 size={16} />
          <span>Share</span>
        </div>
      </div>

      {/* 🔥 COMMENTS SECTION (INLINE) */}
      {openComments && (
        <div className="mt-4 border-t border-gray-700 pt-4">

          {/* Add Comment */}
          <div className="flex gap-2 mb-4">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Join the conversation..."
              className="flex-1 bg-[#1a2a2d] px-3 py-2 rounded-full text-sm outline-none"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-500 px-3 py-1 rounded-full text-sm"
            >
              Post
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-3">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-sm">No comments yet</p>
            ) : (
              comments.map((c) => (
                <div key={c._id} className="flex gap-2">
                  {/* <img
                    src={c.user?.avatar}
                    className="w-6 h-6 rounded-full"
                  /> */}
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold uppercase">
                    {c.user?.username?.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">
                      {c.user?.username}
                    </div>
                    <p className="text-sm text-white">{c.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;