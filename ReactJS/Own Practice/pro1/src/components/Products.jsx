import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product.jsx";
import { Link } from "react-router-dom";
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // search input
  const [searchInput, setSearchInput] = useState("");
  // filter result
  const [filter, setFilter] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios("https://dummyjson.com/products");
      setAllProducts(data.data.products);
      setFilter(data.data.products);
      setLoading(false);
    } catch (err) {
      console.log("Somthing went wrong while loading data", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    "Loading..."
  ) : (
    <>
      <div className="text-center mx-5 my-5">
        <div className="flex ">
          <input
            type="text"
            className="border border-black rounded w-[100%] text-2xl p-2"
            placeholder="Find Product"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={() => {
              const filterProducts = allProducts.filter((e) =>
                e.title.toLowerCase().includes(searchInput.toLowerCase())
              );
              setSearchInput("")
              setFilter(filterProducts);
            }}
            className="bg-black text-white rounded px-2 ms-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filter.map((product) => {
          return (
            <Link to={`/product/${product.id}`}>
              <Product key={product.id} product={product} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
