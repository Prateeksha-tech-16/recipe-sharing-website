import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function RecipeCard({ recipe }) {
 const {
  addFavorite,
  removeFavorite,
  isFavorite,
} = useFavorites();

const favorite = isFavorite(recipe.id);
  const [isHovered, setIsHovered] = useState(false);

  if (!recipe) {
    return null;
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: "1px solid #ececec",
        borderRadius: "18px",
        padding: "18px",
        backgroundColor: "#ffffff",
        textAlign: "center",
        overflow: "hidden",
        transition: "all 0.35s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 12px 28px rgba(0,0,0,0.18)"
          : "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      {/* Popular Badge */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#ff6b35",
          color: "white",
          padding: "6px 14px",
          borderRadius: "30px",
          fontSize: "13px",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        🔥 Popular
      </div>

      {/* Recipe Image */}
      <img
  src={recipe.image}
  alt={recipe.title}
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/400x250?text=Recipe";
  }}
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    transition: "0.35s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
  }}
/>

      {/* Recipe Name */}
      <h2
        style={{
          color: "#1f2937",
          fontSize: "24px",
          fontWeight: "700",
          marginTop: "18px",
          marginBottom: "15px",
          lineHeight: "1.4",
          minHeight: "65px",
        }}
      >
        {recipe.title}
      </h2>

      {/* Rating */}
      <p
        style={{
          color: "#555",
          margin: "8px 0",
        }}
      >
        ⭐ {recipe.rating || "4.5 / 5"}
      </p>

      {/* Category */}
      <p
        style={{
          color: "#555",
          margin: "8px 0",
        }}
      >
        📂 {recipe.category || "General"}
      </p>

      {/* Time */}
      <p
        style={{
          color: "#555",
          margin: "8px 0",
        }}
      >
        ⏱ {recipe.time || "30 mins"}
      </p>

      {/* Difficulty */}
      <p
        style={{
          color: "#555",
          margin: "8px 0 18px",
        }}
      >
        👨‍🍳 {recipe.difficulty || "Easy"}
      </p>

      {/* Favourite */}
      <button
        onClick={() => {
  if (favorite) {
    removeFavorite(recipe.id);
  } else {
    addFavorite(recipe);
  }
}}
        style={{
          border: "none",
          background: "none",
          fontSize: "30px",
          cursor: "pointer",
          marginBottom: "18px",
        }}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      {/* View Recipe */}
      <Link
        to={`/recipe/${recipe.id}`}
        style={{
          textDecoration: "none",
        }}
      >
        <button
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#ff6b35",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          📖 View Full Recipe
        </button>
      </Link>
    </div>
  );
}

export default RecipeCard;