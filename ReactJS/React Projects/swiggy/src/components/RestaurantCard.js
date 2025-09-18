import {  SWIGGY_IMAGE_PATH } from "../utilities/constants";



const RestaurantCard = (props) => {
  const {data} = props
  // console.log("this is props",props)
  const {id,name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla} = data.info
 
  

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 hover:shadow-lg rounded-lg">
      <img
        src={SWIGGY_IMAGE_PATH+cloudinaryImageId}
        className="rounded-lg"
        alt="" 
      />
      <h3 className="font-bold text-xl py-3">{name}</h3>
      <h4>
        {cuisines.join(", ")}
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
