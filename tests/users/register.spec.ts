import { AppDataSource } from "../../src/config/data-source.js";
import type { DataSource } from "typeorm";
import app from "../../src/app.js";
import request from "supertest";
import { truncateTables } from "../utils/index.js";
import { User } from "../../src/entity/User.js";

describe("POST /auth/register", () => {
    let connection: DataSource;

    beforeAll(async () => {
        connection = await AppDataSource.initialize();
    });

    beforeEach(async () => {
        // Database truncate
        await truncateTables(connection);
    });

    afterAll(async () => {
        await connection.destroy();
    });

    describe("Given all fields", () => {
        it("should return 201 status code", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "Aditya",
                lastName: "Tarale",
                email: "tarale.adi@gmail.com",
                password: "secret",
            };

            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);

            // Assert
            expect(response.status).toBe(201);
        });

        it("should return valid json response", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "Aditya",
                lastName: "Tarale",
                email: "tarale.adi@gmail.com",
                password: "secret",
            };

            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);

            // Assert
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json"),
            );
        });

        it("should persist the user in the database", async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: "Aditya",
                lastName: "Tarale",
                email: "tarale.adi@gmail.com",
                password: "secret",
            };

            // Act
            await request(app).post("/auth/register").send(userData);

            // Assert

            const userRepository = connection.getRepository(User);

            const users = await userRepository.find();

            expect(users).toHaveLength(1);

            expect(users[0]?.firstName).toBe(userData.firstName);
            expect(users[0]?.lastName).toBe(userData.lastName);
            expect(users[0]?.email).toBe(userData.email);
        });
    });

    describe("Fields are missing", () => {
        it("", () => {});
    });
});
