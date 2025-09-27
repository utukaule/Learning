import RestaurantCard, { withTopQuality } from "./RestaurantCard";
import "./Body.css";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";

// import { resData } from "../mocdata";

// whenever the state variable updates react re-renders the component

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurantCardWithRatingAboveFive = withTopQuality(RestaurantCard);
  const RestaurantCardWithRatingAboveFourPointFour =
    withTopQuality(RestaurantCard);

  // console.log("rerender");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6606495&lng=73.73215850000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("result",json)
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline! Please check your internet connection.</h1>
    );
  }

  return listOfRestaurants === "" ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex  ">
        {/* input and search */}
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded p-1"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" mx-2 px-4 py-1 bg-green-100 rounded"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        {/* top rated restaurent */}
        <div className="search my-4 p-4 flex item-center">
          <button
            className="px-4 py-1 bg-gray-100"
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
        {/* input box to change the username... */}
        <div className="search  m-4 p-4 flex items-center">
          <label for="input" htmlFor="">
            {" "}
            Username:{" "}
          </label>
          <input
            type="text"
            id="input"
            className="border border-black rounded"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/*  if the restaurant is having rating above 4.5 then it will show "top" */}
              {/* {restaurant.info.avgRating > 4.3 ? (
                <RestaurantCardWithRatingAboveFive data={restaurant}  />
              ) : (
                <RestaurantCard data={restaurant} />
              )} */}

              {restaurant.info.avgRating > 4.4 ? (
                <RestaurantCardWithRatingAboveFourPointFour data={restaurant} />
              ) : (
                <RestaurantCard data={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
