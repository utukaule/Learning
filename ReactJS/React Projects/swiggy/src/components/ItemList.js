import React from "react";
import { Link } from "react-router-dom";
import { SWIGGY_IMAGE_PATH } from "../utilities/constants";

const ItemList = ({ items }) => {
  // console.log("each item", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2  ">
              <span className="font-bold ">{item.card.info.name}</span>
              <span className="font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 ">
            <div className="absolute">
              <button className="p-2 rounded-lg mx-16 bg-black text-white">
                Add +
              </button>
            </div>
            <img src={SWIGGY_IMAGE_PATH + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
