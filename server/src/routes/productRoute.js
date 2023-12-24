import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  productUpdate,
} from "../controllers/productController.js";
import upload from "../middlewares/multerMiddleware.js";
import { authorizeAdmin } from "../middlewares/userMiddleware.js"; 


const router = express.Router();

router.get("/product",authorizeAdmin ,getAllProduct);
router.post("/product/create",upload.single('image'),createProduct);
router.get("/product/:id", getProductById);
router.put("/product/:id",upload.single('image'),productUpdate);
router.delete("/product/:id", deleteProduct);


export default router;
