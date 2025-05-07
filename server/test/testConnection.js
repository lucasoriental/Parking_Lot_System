import pool from "../config/db.config.js";
import '../config/env.config.js'

async function testConnection() {
    console.log("UserName:", process.env.PG_USERNAME,"\nPassword:", process.env.PG_PASSWORD,"\nHost:", process.env.PG_HOST,"\nDB Name:", process.env.PG_DBNAME)
  try {
    const conexao = await pool.query("SELECT NOW()");
    console.log(conexao.rows[0]);
  } catch (erro) {
    console.error("Aconteceu algum erro: ", erro.message);
  } finally {
    pool.end();
  }
}

testConnection();
