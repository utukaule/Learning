import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilities/constants";
import useRestaurantMenu from "../utilities/useRestaurantMenu.js";
import useRestaurantListMenu from "../utilities/useRestaurantListMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // this custom hook is used to display restaurant name and product cost and rating of paticulat restaurant.
  const resInfo = useRestaurantMenu(resId);

  // this custom hook is used to display menu related to that particular product or restaurant.
  const listOfMenu = useRestaurantListMenu(resId);

  if (resInfo === null || listOfMenu === null) return <Shimmer />;

  return (
    <div>
      <h1>{resInfo.name}</h1>
      <img src={resInfo.cloudinaryImageId} alt="" />
      <h4>{resInfo.costForTwoMessage}</h4>
      <p>Rating {resInfo.avgRatingString}</p>
      <h2>Menu</h2>
      <ul style={{ listStyleType: "disc" }}>
        {listOfMenu.map((item, index) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
