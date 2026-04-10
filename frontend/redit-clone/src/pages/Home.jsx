import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="flex h-screen bg-[#0b1416] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header onLoginClick={() => setOpenLogin(true)} />

        <div className="flex flex-1 overflow-hidden">
          <Feed />
          <RightSidebar />
        </div>
      </div>

      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </div>
  );
};

export default Home;