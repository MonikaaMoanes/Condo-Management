const pool = require('../config/db');

const User = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
  },

  create: async (name, email, password_hash, phone, role, unit_number) => {
    const res = await pool.query(
      `INSERT INTO users (name, email, password_hash, phone, role, unit_number)
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [name, email, password_hash, phone, role, unit_number]
    );
    return res.rows[0];
  }, 
    getById: async (id) => {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
  }
};

module.exports = User;
