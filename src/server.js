const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth.routes"));
app.use("/requests", require("./routes/request.routes"));
app.use("/announcements", require("./routes/announcement.routes"));
app.use("/users", require("./routes/user.routes"));

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
