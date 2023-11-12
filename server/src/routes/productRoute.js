import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  productUpdate,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/product", getAllProduct);
router.post("/product/create", createProduct);
router.get("/product/:id", getProductById);
router.put("/product/:id", productUpdate);
router.delete("/product/:id", deleteProduct);

export default router;
