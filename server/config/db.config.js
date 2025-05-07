import { Pool } from "pg";
import "./env.config.js";

const username = process.env.PG_USERNAME
const password = process.env.PG_PASSWORD
const host = process.env.PG_HOST
const dbname = process.env.PG_DBNAME

const database_URL = `postgres://${username}:${password}@${host}/${dbname}`;

const pool = new Pool({
  connectionString: database_URL,
  ssl: { rejectUnauthorized: false },
});

export default pool;