const Request = require('../models/Request');

// Create a new maintenance request
exports.createRequest = async (req, res) => {
  try {
    const { description } = req.body;
    const user_id = req.user.id; // from auth middleware
    const newRequest = await Request.create(user_id, description);
    res.status(201).json(newRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all requests for the logged-in user
exports.getMyRequests = async (req, res) => {
  try {
    const userRequests = await pool.query(
      'SELECT * FROM maintenance_requests WHERE user_id = $1 ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(userRequests.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all requests (admin)
exports.getAllRequests = async (req, res) => {
  try {
    const allRequests = await Request.getAll();
    res.json(allRequests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific request by ID
exports.getRequestById = async (req, res) => {
  try {
    const requestId = req.params.id;
    const resDb = await pool.query(
      'SELECT * FROM maintenance_requests WHERE id = $1',
      [requestId]
    );
    if (resDb.rows.length === 0) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(resDb.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update request status (admin)
exports.updateRequestStatus = async (req, res) => {
  try {
    const requestId = req.params.id;
    const { status } = req.body;
    const updatedRequest = await Request.updateStatus(requestId, status);
    res.json(updatedRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

