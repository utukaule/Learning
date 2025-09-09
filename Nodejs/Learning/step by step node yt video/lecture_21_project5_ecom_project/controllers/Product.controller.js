import { Product } from "../models/Product.model.js";

// add product
export const addProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body);
    res.json({ message: "product added successfully", product, success: true });
  } catch (err) {}
};

// get all products
export const getAllProducts = async (req, res) => {
  try {
    let product = await Product.find();
    if (!product)
      return res.json({ message: "No Products are available", success: false });

    res.json({ message: "fetched all products", product, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// get product by id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.json({ message: "invalid id", success: false });
    }
    res.json({ message: "fetched specific product", product, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// update product by id

export const updateProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.json({ message: "invalid id", success: false });
    }
    res.json({ message: "Product updated successfully", product, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};


// delete product by id

export const deleteProductById  = async (req,res)=>{
     const id = req.params.id;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.json({ message: "invalid id", success: false });
    }
    res.json({ message: "Product Deleted Successfully", product, success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
}