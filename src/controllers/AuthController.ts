import { type Response } from "express";
import { UserService } from "../services/userService.js";
import type { RegisterRequest } from "../types/index.js";

export class AuthController {
    constructor(private userService: UserService) {}

    async register(req: RegisterRequest, res: Response) {
        const { firstName, lastName, email, password } = req.body;

        await this.userService.create({ firstName, lastName, email, password });

        res.status(201).json();
    }
}
