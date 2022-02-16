import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const PORT = 3333;
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (request, response) => {
    return response.json({ message: "API rentalx is running!" });
});

app.use(routes);

app.listen(PORT, () => console.log(`API running on PORT: ${PORT}`));
