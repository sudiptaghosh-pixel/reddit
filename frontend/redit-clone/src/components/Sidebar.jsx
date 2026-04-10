const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0f1a1c] border-r border-gray-800 p-4">
      <h1 className="text-xl font-bold mb-6">ThreadLy</h1>

      <div className="space-y-3">
        <div className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer">Home</div>
        {/* <div className="p-2 rounded-lg bg-gray-800">Popular</div>
        <div className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer">News</div>
        <div className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer">Explore</div> */}
      </div>
    </div>
  );
};

export default Sidebar;