// RecipeApi.jsx

//Location - Odisha, Bhubaneswar
// const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=";

// Location - Lovely Professional University
const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.252318221261632&lng=75.70347367317582&restaurantId=";

export const fetchRecipe = async (id) => {
  try {
    const res = await fetch(MENU_API + id);
    const data = await res.json();

    // Extract restaurant info
    const restaurantInfo = data?.data?.cards?.[2]?.card?.card?.info || {};

    // Extract menu items
    // const menuItems =
    //   data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
    //     ?.card?.card?.itemCards || [];

    const menuItems =
      data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    // menuItems = menuItems.filter(
    //   (recipe) =>
    //     recipe?.card?.card?.["@type"] ===
    //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    // );

    // console.log(
    //   data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );

    return { restaurantInfo, menuItems }; // Return an object with both
  } catch (error) {
    console.log(error);
    return { restaurantInfo: {}, menuItems: [] }; // Return empty objects on error
  }
};
