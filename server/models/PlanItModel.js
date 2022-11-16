const { Pool } = require('pg');

// console.log(process.env)
// const PG_URI = process.env.POSTGRES_URI; 
const PG_URI = 'postgres://oiudcwts:m_JVFa7AcWuo5DDyYNYmh4cC36B4cjW9@heffalump.db.elephantsql.com/oiudcwts';

const pool = new Pool ({
  connectionString: PG_URI
}); 


module.exports = {
  query: (text, params, callback) => {
    console.log('Executed query', text);
    return pool.query(text, params, callback);
  }
};