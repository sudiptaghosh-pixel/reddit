import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#0f1a1c] w-[420px] rounded-2xl p-6 relative shadow-lg">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>

        {/* Form */}
        <div className="space-y-4">

          {/* Signup Extra Fields */}
          {isSignup && (
            <>
              <input
                placeholder="Email *"
                className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none"
              />

              <input
                placeholder="Username *"
                className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none"
              />
            </>
          )}

          {/* Login Email */}
          {!isSignup && (
            <input
              placeholder="Email or username *"
              className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none"
            />
          )}

          {/* Password Field with Eye Icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none pr-10"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
        </div>

        {/* Toggle Login / Signup */}
        <p
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm text-blue-400 mt-4 cursor-pointer text-center"
        >
          {isSignup
            ? "Already have an account? Log In"
            : "New here? Sign Up"}
        </p>

        {/* Button */}
        <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-3 rounded-full text-white font-medium">
          {isSignup ? "Register" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;