import pool from "../config/db.config.js";

async function setupTable() {
  try {
    pool.query("QUERY WILL CREATED AS SOON I DECIDE THE DATABASE STRUCTURE");
  } catch (err) {
    console.error(err);
  }
}

setupTable();
