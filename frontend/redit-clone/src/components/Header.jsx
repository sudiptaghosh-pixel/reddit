import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import CreatePost from "./CreatePost";

const Header = ({ onLoginClick }) => {
  const { user, logout } = useAuth();
  const [openPost, setOpenPost] = useState(false);

  return (
    <>
      <div className="h-14 flex items-center justify-between px-6 border-b border-gray-800 bg-[#0b1416]">
        <input
          placeholder="Find anything"
          className="bg-[#1a2a2d] px-4 py-2 rounded-full w-[40%] text-sm outline-none"
        />

        <div className="flex items-center gap-3">
          {!user ? (
            <button
              onClick={onLoginClick}
              className="px-4 py-1 rounded-full text-xl text-white 
             bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
             hover:from-orange-600 hover:to-pink-600 
             transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Log In
            </button>
          ) : (
            <>
              <button
                onClick={() => setOpenPost(true)}
                className="bg-green-600 px-3 py-1 rounded-full text-sm"
              >
                + Create Post
              </button>

              <img src={user.avatar} className="w-8 h-8 rounded-full" />

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded-full text-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Create Post Modal */}
      {openPost && <CreatePost onClose={() => setOpenPost(false)} />}
    </>
  );
};

export default Header;