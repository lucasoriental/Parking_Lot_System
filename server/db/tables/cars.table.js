import pool from "../../config/db.config.js";
import {
  CREATE_DIMENSION_TABLE_CARS,
  CREATE_FACT_TABLE_CARS,
} from "../../queries/scripts.table.queries.js";

export async function createTableDimCars(req, res) {
  try {
    const result = await pool.query(CREATE_DIMENSION_TABLE_CARS);
    console.log(result);
    if (!result.rows.length) {
      console.log("table already exists!");
      res.status(409).json({ message: "table already exists!" });
    } else {
      console.log("DimCars Table created successfully!");
      res.json({ message: "DimCars Table created successfully!" });
    }
  } catch (err) {
    console.log(`Error while creating the DimCar table: ${err}`);
  }
}

export async function createTableFactCars(req, res) {
  try {
    const result = await pool.query(CREATE_FACT_TABLE_CARS);
    if (!result.rows.length) {
      console.log("table already exists!");
      res.status(409).json({ message: "table already exists!" });
    } else {
      console.log("factCars Table created successfully!");
      res.json({ message: "factCars Table created successfully!" });
    }
  } catch (err) {
    console.log(`Error while creating the FactCar table: ${err}`);
  }
}
