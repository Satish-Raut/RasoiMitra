import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RecipeCard } from "./RecipeCard";

export const Accordions = ({ item, showRecipe, setShowIndex }) => {
  const { title, itemCards } = item.card.card;

  const handelToggle = () => {
    setShowIndex();
  };

  return (
    <div
      className="border border-gray-200 rounded-2xl shadow-md mb-4 
                 bg-white hover:shadow-lg transition-shadow duration-300"
    >
      {/* Header */}
      <button
        onClick={handelToggle}
        className="w-full flex justify-between items-center px-4 py-3 
             text-left border-3 border-transparent hover:border-t-orange-400 
             rounded-2xl transition-colors duration-300
             sm:px-6 sm:py-4 cursor-pointer"
      >
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          {title}
        </h1>
        <span
          className={`text-3xl text-gray-600 transform transition-transform duration-300 cursor-pointer ${
            showRecipe ? "rotate-180" : "rotate-0"
          }`}
        >
          <RiArrowDropDownLine />
        </span>
      </button>

      {/* Devider */}
      <div className="h-px mx-5 bg-gradient-to-r from-orange-200 via-gray-200 to-orange-200 mb-4" />

      {/* Items with animation */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showRecipe ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-3 bg-gray-50 rounded-b-2xl">
          {itemCards?.map((recipeItem) => {
            const { id } = recipeItem.card.info;
            return (
              showRecipe && <RecipeCard key={id} recipeItem={recipeItem} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
