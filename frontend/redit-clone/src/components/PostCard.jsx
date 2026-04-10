// import {
//   ArrowUp,
//   ArrowDown,
//   MessageCircle,
//   Share2,
//   Award,
// } from "lucide-react";

// const PostCard = () => {
//   return (
//     <div className="bg-[#0f1a1c] border border-gray-800 rounded-xl p-4  hover:border-gray-700 transition">

//       {/* Top Section (Subreddit + Time) */}
//       <div className="flex items-center justify-between mb-2 text-sm text-gray-400">
//         <div className="flex items-center gap-2">
//           <div className="w-6 h-6 rounded-full bg-gray-600"></div>
//           <span className="text-white font-medium">r/TwentiesIndia</span>
//           <span>• 4 hr. ago</span>
//         </div>

//         <button className="text-gray-400 hover:text-white">•••</button>
//       </div>

//       {/* Title */}
//       <h2 className="text-lg font-semibold text-white mb-2">
//         21M dating a 27F
//       </h2>

//       {/* Content */}
//       <p className="text-gray-300 text-sm leading-relaxed">
//         I'm 21M, and I've been dating a 27F (6 years older than me) for 1 year
//         and 3 months now. Honestly, it's been one of the best relationships I've
//         had. The maturity difference is a huge plus. There's barely any drama,
//         fights are rare and mature, and our conversations are actually deep and
//         meaningful. She guides me a lot on career, fitness, and life decisions
//         without being controlling. She's also much more confident and secure,
//         which makes the relationship feel very stable and comforting. Even
//         intimately, the experience is way better because she knows what she
//         wants. Overall, dating an older woman has been a really positive
//         experience for me so far.
//       </p>

//       {/* Actions */}
//       <div className="flex items-center gap-6 mt-4 text-gray-400 text-sm">

//         {/* Upvote / Downvote */}
//         <div className="flex items-center gap-2 bg-[#1a2a2d] px-3 py-1 rounded-full">
//           <ArrowUp size={16} className="cursor-pointer hover:text-white" />
//           <span>357</span>
//           <ArrowDown size={16} className="cursor-pointer hover:text-white" />
//         </div>

//         {/* Comments */}
//         <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//           <MessageCircle size={16} />
//           <span>154</span>
//         </div>

//         {/* Award */}
//         <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//           <Award size={16} />
//         </div>

//         {/* Share */}
//         <div className="flex items-center gap-2 cursor-pointer hover:text-white">
//           <Share2 size={16} />
//           <span>Share</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCard;


import {
  ArrowUp,
  ArrowDown,
  MessageCircle,
  Share2,
} from "lucide-react";
import { likePost } from "../services/postService";

const PostCard = ({ post }) => {

  const handleLike = async () => {
    await likePost(post._id);
    // optional: refresh UI later
  };

  return (
    <div className="bg-[#0f1a1c] border border-gray-800 rounded-xl p-4 max-w-2xl mx-auto">

      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <img
          src={post.user?.avatar}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-white font-medium">
          r/{post.community?.name}
        </span>
        <span>• {new Date(post.createdAt).toLocaleString()}</span>
      </div>

      {/* Title (first line of content) */}
      <h2 className="text-lg font-semibold text-white mb-2">
        {post.content?.split("\n")[0]}
      </h2>

      {/* Body */}
      <p className="text-gray-300 text-sm">
        {post.content?.split("\n")[1]}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-6 mt-4 text-gray-400 text-sm">
        
        <div
          onClick={handleLike}
          className="flex items-center gap-2 bg-[#1a2a2d] px-3 py-1 rounded-full cursor-pointer"
        >
          <ArrowUp size={16} />
          <span>{post.likes.length}</span>
          <ArrowDown size={16} />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <MessageCircle size={16} />
          <span>Comment</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Share2 size={16} />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;