import pool from "../config/db.config.js"
import { GET_ALL_CARS } from "../queries/cars.queries.js"

export async function getAllCarsModel() {
    try {
        const result = await pool.query(GET_ALL_CARS);
        console.log(result.rows);
        return result.rows  ;
    } catch(err) {
        console.error("getAllCarsModel\n");
        console.error("There is something wrong about query.\n Error: ", err);
        throw err;
    }
}