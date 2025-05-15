import { Router } from "express";
import { createTableDimCars, createTableFactCars } from "./cars.table.js";

const router = Router();

router.get("/createTableFactCars", createTableFactCars);
router.get("/createTableDimCars", createTableDimCars);

export default router;
