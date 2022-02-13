import express from "express";

import { routes } from "./routes";

const PORT = 3333;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "API rentalx is running!" });
});

app.use(routes);

app.listen(PORT, () => console.log(`API running on PORT: ${PORT}`));
