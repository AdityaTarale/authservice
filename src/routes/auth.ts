import express from "express";
import { AppDataSource } from "../config/data-source.js";
import { AuthController } from "../controllers/AuthController.js";
import { User } from "../entity/User.js";
import { UserService } from "../services/userService.js";

const router = express.Router();

// Dependency injection
const userRepository = AppDataSource.getRepository(User);
const userService = new UserService(userRepository);
const authController = new AuthController(userService);

router.post("/register", (req, res) => authController.register(req, res));

export default router;
