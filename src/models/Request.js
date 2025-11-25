const pool = require('../config/db');

const Request = {
  // Get all maintenance requests (admin only)
  getAll: async () => {
    const res = await pool.query('SELECT * FROM maintenance_requests ORDER BY created_at DESC');
    return res.rows;
  },

  // Create user request
  create: async (user_id, description) => {
    const res = await pool.query(
      `INSERT INTO maintenance_requests (user_id, description)
       VALUES ($1, $2) RETURNING *`,
      [user_id, description]
    );
    return res.rows[0];
  },

  // Update request status
  updateStatus: async (id, status) => {
    const res = await pool.query(
      `UPDATE maintenance_requests SET status = $1 WHERE id = $2 RETURNING *`,
      [status, id]
    );
    return res.rows[0];
  }
};

module.exports = Request;

