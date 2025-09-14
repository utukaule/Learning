import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilities/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [listOfMenu, setListOfMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json.data.cards);
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)
    setListOfMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };

  if (resInfo === null || listOfMenu === null) return <Shimmer />;

  console.log("list of menu is:- ", listOfMenu);
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
