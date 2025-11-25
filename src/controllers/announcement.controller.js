const Announcement = require('../models/Announcement');

// Create a new announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newAnnouncement = await Announcement.create(title, description);
    res.status(201).json(newAnnouncement);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all announcements
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.getAll();
    res.json(announcements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete announcement by ID
exports.deleteAnnouncement = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query('DELETE FROM announcements WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Announcement not found' });
    }
    res.json({ message: `Announcement ${id} deleted` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
