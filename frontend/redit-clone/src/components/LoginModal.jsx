import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginUser, registerUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.placeholder.includes("Email") ? "email" : e.target.placeholder.includes("Username") ? "username" : "password"]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        await registerUser({
          email: form.email,
          username: form.username,
          password: form.password,
        });
        alert("Registered successfully");
        setIsSignup(false);
      } else {
        const res = await loginUser({
          email: form.email,
          password: form.password,
        });

        login(res.data); // save in context + localStorage
        onClose();
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#0f1a1c] w-[420px] rounded-2xl p-6 relative shadow-lg">

        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>

        <div className="space-y-4">

          {isSignup && (
            <>
              <input
                placeholder="Email *"
                onChange={handleChange}
                className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none"
              />
              <input
                placeholder="Username *"
                onChange={handleChange}
                className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none"
              />
            </>
          )}

          {!isSignup && (
            <input
              placeholder="Email or username *"
              onChange={handleChange}
              className="w-full bg-[#1a2a2d] px-4 py-3 rounded-lg outline-none"
            />
          )}

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password *"
              onChange={handleChange}
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

        <p
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm text-blue-400 mt-4 cursor-pointer text-center"
        >
          {isSignup
            ? "Already have an account? Log In"
            : "New here? Sign Up"}
        </p>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-3 font-medium rounded-full text-xl text-white 
             bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
             hover:from-orange-600 hover:to-pink-600 
             transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {isSignup ? "Register" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default LoginModal;