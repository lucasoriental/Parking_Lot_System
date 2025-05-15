import { getAllCarsModel } from "../models/cars.models.js";

export async function getAllCarsService() {
  try {
    const result = await getAllCarsModel();
    if (!result) throw new Error("No cars in the database");
    return result;
  } catch (err) {
    console.error("getAllCarsService\n");
    console.error(
      "Something went wrong while fetching all the car data.\n Error: ",
      err
    );
    throw err;
  }
}
