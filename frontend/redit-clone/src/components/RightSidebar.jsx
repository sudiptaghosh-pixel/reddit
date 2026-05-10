// const RightSidebar = () => {
//   return (
//     <div className="w-80 hidden lg:block p-4">
//       <div className="bg-[#111b1e] p-4 rounded-xl border border-gray-800">
//         <h3 className="font-semibold mb-3">POPULAR COMMUNITIES</h3>

//         <div className="space-y-3 text-sm">
//           <div>r/AskReddit</div>
//           <div>r/leagueoflegends</div>
//           <div>r/OutOfTheLoop</div>
//           <div>r/discordapp</div>
//           <div>r/Twitch</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RightSidebar;


import { useEffect, useState } from "react";
import { getCommunities } from "../services/communityService";

const RightSidebar = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetchCommunities();
  }, []);

  const fetchCommunities = async () => {
    try {
      const res = await getCommunities();
      setCommunities(res.data);
    } catch (err) {
      console.error("Error fetching communities", err);
    }
  };

  return (
    <div className="w-80 hidden lg:block p-4">
      <div className="bg-[#111b1e] p-4 rounded-xl border border-gray-800">
        <h3 className="font-semibold mb-3">POPULAR COMMUNITIES</h3>

        <div className="space-y-3 text-sm">
          {communities.length === 0 ? (
            <p className="text-gray-400">No communities</p>
          ) : (
            communities.map((c) => (
              <div
                key={c._id}
                className="cursor-pointer hover:text-white"
              >
                r/{c.name}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;