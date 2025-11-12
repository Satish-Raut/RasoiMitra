import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Festivals from "../utils/contextApi";

export const Card = ({ menu }) => {

  const {festivalName} = useContext(Festivals);

  const {
    id,
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    locality,
    aggregatedDiscountInfoV3,
    veg,
  } = menu?.info;

  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <NavLink to={`/foods/${id}`}>
      <div
        className="w-80 bg-[#E9E9E9] rounded-xl shadow-md overflow-hidden
                 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
      >
        {/* Image Section */}
        <div className="relative w-full h-40">
          {/* Add the Veg-NonVeg label Restaurant  */}
          <div
            className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full ${
              veg ? "bg-green-500 text-white" : "bg-red-500 text-white"
            } shadow-md`}
          >
            {veg ? "VEG" : "NON-VEG"}
          </div>

          {/* Image */}
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-t-xl transition-transform duration-500"
          />

          {/* Bottom Shadow Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/85 to-transparent "></div>

          {/* Offer Badge */}
          {aggregatedDiscountInfoV3?.header && (
            <span
              className="absolute bottom-2 left-2 text-white font-bold text-lg 
                 px-2 py-1 rounded"
            >
              {aggregatedDiscountInfoV3.header}{" "}
              {aggregatedDiscountInfoV3.subHeader || ""}
            </span>
          )}
        </div>

        {/* Details Section */}
        <div className="p-3">
          {/* Restaurant Name */}
          <h2 className="text-lg font-bold text-gray-900 truncate">{name}</h2>

          {/* Rating & Delivery */}
          <div className="flex items-center text-sm text-gray-700 my-1">
            <span className="flex items-center mr-2">
              <span className="text-green-600 text-base">●</span>
              <span className="ml-1 font-medium">{avgRating || "N/A"}</span>
            </span>
            <span className="mx-1">•</span>
            <span>
              {sla?.deliveryTime ? `${sla.deliveryTime} mins` : "N/A"}
            </span>
          </div>

          {/* Cuisines */}
          <p className="text-sm text-gray-500 truncate">
            {cuisines.join(", ")}
          </p>

          {/* Locality */}
          <p className="text-sm text-gray-500 truncate">{locality}</p>
          {/* Festival */}
          <p className="text-sm font-semibold text-gray-900 truncate">{festivalName}</p>
        </div>
      </div>
    </NavLink>
  );
};
