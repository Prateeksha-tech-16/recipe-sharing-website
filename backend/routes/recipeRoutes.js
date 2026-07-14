const express = require("express");

const router = express.Router();

const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    category: "Pizza",
    time: "30 mins",
    rating: 4.8,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    id: 2,
    title: "Creamy Alfredo Pasta",
    category: "Pasta",
    time: "25 mins",
    rating: 4.7,
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a"
  }
];

router.get("/", (req, res) => {
  res.json(recipes);
});

module.exports = router;