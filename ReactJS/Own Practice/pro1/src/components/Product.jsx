const Product = ({ product }) => {
  console.log("this is product", product);
  // let {product} = product.product
  return (
    <div className="border border-gray hover:border-gray-400 m-5 rounded shadow-xl cursor-pointer">
      
      <img
        src={product?.thumbnail}
        className="w-[250px] h-[250px] border shadow-md rounded m-2"
        alt=""
      />
      <div className="px-2 py-2">
        <p className="font-semibold text-xl">{product?.brand}</p>
        <p className="font-semibold">{product?.title}</p>
        <p>{product?.category}</p>
        <div className="flex justify-between ">
          <span>${product?.price}</span>
          <span>⭐{product?.rating}</span>
        </div>
        <p className={product.stock < 10 ? "text-red-500" : "text-black"}>
          {product?.availabilityStatus}-{product?.stock}
        </p>
      </div>
      
    </div>
  );
};

export default Product;
