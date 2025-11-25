const pool = require('../config/db');

const Announcement = {
  // Get all announcements
  getAll: async () => {
    const res = await pool.query('SELECT * FROM announcements ORDER BY created_at DESC');
    return res.rows;
  },

  // Create announcement
  create: async (title, description) => {
    const res = await pool.query(
      `INSERT INTO announcements (title, description)
       VALUES ($1, $2) RETURNING *`,
      [title, description]
    );
    return res.rows[0];
  }
};

module.exports = Announcement;

