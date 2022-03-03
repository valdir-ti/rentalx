import "dotenv/config";
import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import fs from "fs";
import * as moment from "moment-timezone";
import morganBody from "morgan-body";
import path from "path";
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const PORT = 3333;

const app = express();

app.use(express.json());

app.use(bodyParser.json());

const log = fs.createWriteStream(
    path.join(
        __dirname,
        "./logs",
        `express-${moment.tz("America/Sao_Paulo").format("YYYY-MM-DD")}.log`
    ),
    {
        flags: "a",
    }
);

morganBody(app, {
    noColors: true,
    stream: log,
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (request, response) => {
    return response.json({ message: "API rentalx is running!" });
});

app.use(routes);

app.listen(PORT, () => console.log(`API running on PORT: ${PORT}`));
