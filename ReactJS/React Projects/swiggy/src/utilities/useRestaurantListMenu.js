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
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
  };
  return listOfMenu;
};

export default useRestaurantListMenu;
