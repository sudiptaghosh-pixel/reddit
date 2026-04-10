// import PostCard from "./PostCard";

// const Feed = () => {
//   return (
//     <div className="flex-1 overflow-y-auto p-6">
//       <PostCard />
//     </div>
//   );
// };

// export default Feed;

import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "../services/postService";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts", err);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {posts.length === 0 ? (
        <p className="text-gray-400 text-center">No posts yet</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
};

export default Feed;