const express = require("express");
const cors =require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("RecipeShare Backend Running 🚀");
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});