const RightSidebar = () => {
  return (
    <div className="w-80 hidden lg:block p-4">
      <div className="bg-[#111b1e] p-4 rounded-xl border border-gray-800">
        <h3 className="font-semibold mb-3">POPULAR COMMUNITIES</h3>

        <div className="space-y-3 text-sm">
          <div>r/AskReddit</div>
          <div>r/leagueoflegends</div>
          <div>r/OutOfTheLoop</div>
          <div>r/discordapp</div>
          <div>r/Twitch</div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;