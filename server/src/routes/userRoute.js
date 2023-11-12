import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);
router.post("/user/create", createUser);

export default router;
