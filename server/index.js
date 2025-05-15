import express from "express";
import cors from "cors";
import "./config/env.config.js";

import tables from "./db/tables/common.routes.js";
import carsRoutes from "./routes/car.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/cars", carsRoutes);
app.use("/scripts/table", tables);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
