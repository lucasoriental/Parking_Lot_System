import { Router } from "express"
import { getAllCarsController } from "../controllers/cars.controllers.js";

const router = Router();

router.get("/getAllCars", getAllCarsController);

export default router;