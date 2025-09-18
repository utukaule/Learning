import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantListMenu = (resId) => {
  const [listOfMenu, setListOfMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setListOfMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
    // console.log("this is data");
  };

  return listOfMenu;
};

export default useRestaurantListMenu;
