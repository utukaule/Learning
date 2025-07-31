import {  SWIGGY_IMAGE_PATH } from "../utilities/constants";



const RestaurantCard = (props) => {
  const {data} = props
  console.log("this is props",props)
  const {id,name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla} = data.info
 
  

  return (
    <div className="res-card">
      <img
        src={SWIGGY_IMAGE_PATH+cloudinaryImageId}
        className="res-logo"
        alt="" 
      />
      <h3>{name}</h3>
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
