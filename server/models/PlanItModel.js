const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const PG_URI = process.env.POSTGRES_URI; 
// console.log(PG_URI);

const pool = new Pool ({
  connectionString: PG_URI
}); 


module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query', text);
    return pool.query(text, params, callback);
  }
};