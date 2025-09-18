import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log("this is data", data);
  const handleClick = () =>{
    console.log("clicked")
  }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
