import { useEffect, useState } from "react";
import { fetchRestroData } from "../api/RestaurantApi";
import { Card } from "../Components/UI/Card";

export const Foods = () => {
  const [restroData, setRestroData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRestroData();
      setRestroData(data);
      setFilteredData(data); // also set filtered initially
    };
    getData();
  }, []);

  console.log("Restaurant Data: ", restroData);

  const handelSearchRestro = (value) => {
    setSearchText(value);
    const filtered = restroData.filter((menu) => {
      return menu?.info?.name?.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(filtered);
  };

  const handelTopRestaurant = () => {
    const topRestro = restroData.filter((menu) => {
      return menu?.info?.avgRating >= 4;
    });
    setFilteredData(topRestro);
  };

  const handleReset = () => {
    setSearchText("");
    setFilteredData(restroData);
  };

  return (
    <div className="flex flex-col items-center p-4 mt-22">
      {/* Main container */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#393E46] via-orange-500 to-[#222831] bg-[length:200%_200%] animate-gradient border-8">
        Taste Happiness with Every Order
      </h1>

      {/* Search and filter section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => handelSearchRestro(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
        <button
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold text-black hover:scale-105 hover:shadow-lg transition cursor-pointer"
          onClick={handelTopRestaurant}
        >
          Top Rated Restaurants
        </button>
        <button
          className="px-6 py-2 rounded-xl bg-gray-600 text-white hover:bg-gray-700 transition cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-4 mx-auto">
        {filteredData.length > 0 ? (
          filteredData.map((menu) => <Card key={menu?.info?.id} menu={menu} />)
        ) : (
          <p className="text-gray-400 text-lg">No restaurants found 🍽️</p>
        )}
      </div>
    </div>
  );
};
