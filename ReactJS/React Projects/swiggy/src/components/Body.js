import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { resData } from "../mocdata";

// whenever the state variable updates react re-renders the component

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("rerender");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6606495&lng=73.73215850000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("result",json)
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants === "" ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search_btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRestaurant(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
              <RestaurantCard  data={restaurant} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
