import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

const PAGE_SIZE = 10;

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=200");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / 10);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n)
  }
  return !products.length ? (
    "no products found"
  ) : (
    <div>
      <div>
        <h1 className="heading">We lcome To Pegination</h1>

        <div className="products-container">
          {products.slice(start, end).map((p) => {
            return (
              <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
            );
          })}
        </div>
        <div className="pagination-container">
          <span onClick={()=>goToPreviousPage()}>◀️</span>
          {[...Array(noOfPages).keys()].map((n) => (
            <span className="page-number" key={n}
                  onClick={()=>handlePageChange(n)}
            >
              {n}
            </span>
          ))}
          <span onClick={()=>goToNextPage()}>▶️</span>
        </div>
      </div>
    </div>
  );
};

export default App;
