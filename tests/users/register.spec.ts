import app from "../../src/app.js";
import request from "supertest";

describe("POST /auth/register", () => {
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
    });

    describe("Fields are missing", () => {
        it("", () => {});
    });
});
