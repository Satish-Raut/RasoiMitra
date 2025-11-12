

export const fetchRestroData = async (setRestroData) => {
  const res = await fetch(
    //Location - Odisha, Bhubaneswar
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2959847&lng=85.8246101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    // Location - Lovely Professional University
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.252318221261632&lng=75.70347367317582&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await res.json();
  const restaurantList =
    json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
 
    // console.log("Here is the list: ", restaurantList)
  return restaurantList; 
};



