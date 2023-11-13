import express from "express";
import {
  deleteUser,
  getAllUser,
  getUserById,
  loginController,
  registerController,
  updateUser,
} from "../controllers/userController.js";
import {
  authenticateUser,
  authorizeAdmin,
} from "../middlewares/userMiddleware.js";

const router = express.Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);
router.post("/user/register", registerController);
router.post("/user/login", authenticateUser, authorizeAdmin, loginController);

export default router;
