import { NavLink } from "react-router-dom";
import { GiCampCookingPot } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { useContext } from "react";
import Festivals from "../Components/utils/contextApi";

export const Home = () => {
  const { festivalName, setFestival } = useContext(Festivals);

  return (
    <section className="relative min-h-screen flex justify-center items-start text-center text-white overflow-hidden mx-9 pt-60">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl justify-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <SiCodechef className="text-[#37353E] text-[10rem] md:text-[15rem] drop-shadow-md animate-pulse" />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#37353E] drop-shadow-lg transition-transform duration-700 ease-out transform hover:-translate-y-2">
            Welcome to{" "}
            <span className="flex flex-row gap-4 items-center justify-center bg-gradient-to-b from-[#2F3236] to-[#FF7517] bg-clip-text text-transparent pb-1 leading-tight">
              RasoiMitra{" "}
              <GiCampCookingPot className="text-[#B87C4C] drop-shadow-lg hover:drop-shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-125" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#4B4A54] mb-8 transition-opacity duration-1000 opacity-90 hover:opacity-100">
            Choose from a wide variety of{" "}
            <span className="font-semibold text-[#FF7517]">
              delicious meals
            </span>{" "}
            🍔🍕🥗 delivered hot & fresh right at your doorstep.
          </p>

          {/* CTA Button */}
          <NavLink
            to="/foods"
            className="relative inline-block bg-[#2F3236] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-xl shadow-lg overflow-hidden group transition-transform duration-300 transform hover:scale-105 mb-4"
            aria-label="Order Now"
          >
            <span className="relative z-10 text-white">Order Now 🚀</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#2F3236] to-[#FF7517] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </NavLink>

          {/* Input box below button */}
          <input
            type="text"
            placeholder="Today's Festival..."
            value={festivalName}
            onChange={(e) => setFestival(e.target.value)}
            onSubmit={() => setFestival("")}
            className="px-6 py-3 text-base sm:text-lg rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF7517]  transition mx-auto block"
          />
        </div>
      </div>
    </section>
  );
};
