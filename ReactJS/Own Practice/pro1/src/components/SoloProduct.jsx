import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SoloProduct = () => {
  const [soloProduct, setSoloProduct] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async() =>{
      const soloData = await axios("https://dummyjson.com/products/" + id);
      console.log("solo data", soloData);
      setSoloProduct(soloData.data)
    }
    fetchData()
  },[]);

  return <div>
    <div>
      <img src={soloProduct?.thumbnail} alt="" />
    </div>
    <div>{soloProduct.brand}</div>
  </div>;
};

export default SoloProduct;
