import { useEffect, useState } from "react";
import { fetchData } from "../api/AboutApi";

export const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setUserData(data);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };
    getData();
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-3xl animate-pulse">Loading...</p>
      </div>
    );
  }

  const {
    name,
    avatar_url,
    bio,
    followers,
    following,
    public_repos,
    html_url,
  } = userData;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-[#DCDCDC] shadow-2xl rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
        
        {/* Gradient Header */}
        <div className="h-24 sm:h-28 bg-gradient-to-r from-[#393E46] to-[#B87C4C] rounded-t-2xl"></div>

        {/* Profile Section */}
        <div className="flex flex-col items-center -mt-12 sm:-mt-14 px-4 sm:px-8 pb-6">
          <img
            src={avatar_url}
            alt="user avatar"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-white object-cover"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mt-4">
            {name}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mt-2 px-2">
            {bio}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 text-center mt-6 w-full">
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-800">
                {followers}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Followers</p>
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-800">
                {following}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Following</p>
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-800">
                {public_repos}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Repos</p>
            </div>
          </div>

          {/* GitHub Button */}
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 relative inline-block bg-[#2F3236] px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg md:text-xl font-semibold rounded-xl shadow-lg overflow-hidden group"
          >
            <span className="relative z-10 text-white">View Profile</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#2F3236] to-[#FF7517] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </div>
  );
};
