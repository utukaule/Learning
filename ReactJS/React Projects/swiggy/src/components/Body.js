import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import { useDeferredValue, useEffect, useState } from "react";
// import { resData } from "../mocdata";

// whenever the state variable updates react re-renders the component

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6606495&lng=73.73215850000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    // console.log("result",json)
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }
  return (
    loading ? "Loading": <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.6
            );
            setListOfRestaurants(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} data={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
