import Product from "../models/productModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send({
      success: true,
      message: "Product Get Successfully",
      products,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "Product Not Found",
      error,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const products = new Product(req.body);
    await products.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const productUpdate = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const products = await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
    if (!products) {
      res.status(404).send({
        success: false,
        message: "Product Not Found",
      });
    }
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      res.status(404).send({
        success: false,
        message: "Product Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Product Get Successfully",
      products,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: "Internal Server Error",
      error,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      res.status(404).send({
        success: false,
        message: "Product Not Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};
