import { useEffect, useState } from "react";
import { getComments, addComment } from "../services/commentService";

const CommentModal = ({ post, onClose }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await getComments(post._id);
    setComments(res.data);
  };

  const handleComment = async () => {
    if (!text) return;

    await addComment({
      postId: post._id,
      text,
    });

    setText("");
    fetchComments(); // refresh
  };

  return (
    <div className="fixed inset-0 bg-[#0b1416] text-white z-50 overflow-y-auto p-6">

      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Comments</h2>
        <button onClick={onClose}>✕</button>
      </div>

      {/* Add Comment */}
      <div className="bg-[#111b1e] p-4 rounded-xl mb-6">
        <textarea
          placeholder="Join the conversation"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-transparent outline-none text-sm"
        />

        <div className="flex justify-end mt-2">
          <button
            onClick={handleComment}
            className="bg-blue-500 px-4 py-1 rounded-full"
          >
            Comment
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c._id} className="flex gap-3">
            <img
              src={c.user?.avatar}
              className="w-8 h-8 rounded-full"
            />

            <div>
              <div className="text-sm text-gray-400">
                {c.user?.username} •{" "}
                {new Date(c.createdAt).toLocaleString()}
              </div>

              <p className="text-sm text-white">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentModal;