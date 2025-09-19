import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // console.log("this is data", data);
  // const [showItems, setShowItems] = useState(false)
  const handleClick = () =>{
    // setShowItems(!showItems)
    setShowIndex()
  }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
