import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const handleData = async() =>{
      const data = await axios('https://dummyjson.com/products')
      
      console.log("the products are:- ",data.data.products)
      setProducts(data.data.products)

    }
    handleData()
  },[])
  return (
    <div>
      <h1>We are learning pegination</h1>
      <div className="main">
        <div>
        {
          products.map((product)=>(<div key={product.id} className="product">
              <img src={""} alt="" />
            </div>)
          )
        }

        </div>
      </div>
    </div>
  );
}

export default App;
