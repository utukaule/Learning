import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilities/constants";
import useRestaurantMenu from "../utilities/useRestaurantMenu.js";
import useRestaurantListMenu from "../utilities/useRestaurantListMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // this custom hook is used to display restaurant name and product cost and rating of paticulat restaurant.
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);
  // this custom hook is used to display menu related to that particular product or restaurant.
  const listOfMenu = useRestaurantListMenu(resId);
  // console.log("list of categories:-", listOfMenu);

  // const categories = listOfMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c)

  if (resInfo === null || listOfMenu === null) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{resInfo.name}</h1>
      <p className="font-bold text-xl">
        {resInfo.cuisines.join(", ")}-{resInfo.costForTwoMessage}
      </p>
      {/* Catagories accordian  */}
      {listOfMenu.map((category) => {
            return <RestaurantCategory data={category?.card?.card} />;
          })}
    </div>
  );
};

export default RestaurantMenu;
