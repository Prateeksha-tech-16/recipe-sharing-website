const getAllRecipes = (req, res) => {
  res.json({
    success: true,
    message: "Recipes fetched successfully!",
  });
};

module.exports = {
  getAllRecipes,
};