const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/blog", blogRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});