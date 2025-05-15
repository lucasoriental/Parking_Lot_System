import { getAllCarsService } from "../services/cars.services.js";

export async function getAllCarsController(req, res) {
  try {
    const cars = await getAllCarsService();
    res.status(200).json(cars);
  } catch (err) {
    console.error("getAllCarsController\n");
    console.error(
      "Something went wrong while fetching all the car data.\n Error: ",
      err
    );
    res.status(404).json({ message: err.message });
  }
}
