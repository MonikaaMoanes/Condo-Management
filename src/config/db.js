const { Pool } = require('pg');

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',          
  host: 'localhost',         
  database: 'condo_management', 
  password: '331997', 
  port: 5432,              
});

// Test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to DB:', err);
  } else {
    console.log('Database connected! Current time:', res.rows[0].now);
  }
});

module.exports = pool;
