import { SWIGGY_IMAGE_PATH } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { data } = props || {};

  // defensive: if data or data.info is missing, render a placeholder or return null
  if (!data || !data.info) {
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg">
        <div className="animate-pulse">
          <div className="h-40 bg-gray-200 rounded-lg" />
          <div className="h-6 bg-gray-200 rounded mt-3 w-3/4" />
          <div className="h-4 bg-gray-200 rounded mt-2 w-1/2" />
        </div>
      </div>
    );
  }

  // console.log("this is props",props)
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    data.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 hover:shadow-lg rounded-lg">
      <img
        src={SWIGGY_IMAGE_PATH + cloudinaryImageId}
        className="rounded-lg"
        alt=""
      />
      <h3 className="font-bold text-xl py-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

// Higher order component

// input = RestaurantCard = RestaurantCardTop

// export const withTopQuality = (RestaurantCard) => {
//   // Return a component that forwards all props to the wrapped component
//   return ({ msg = "TOP", ...restProps }) => {
//     return (
//       <div className="relative">
//         <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
//           {msg}
//         </div>
//         <RestaurantCard {...restProps} />
//       </div>
//     );
//   };
// };

export const withTopQuality = (RestaurantCard) => {
  return ({ msg = "TOP", ...props }) => {
    return (
      <div className="relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          {msg}
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
