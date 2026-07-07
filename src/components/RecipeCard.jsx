import { useState } from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const [favorite, setFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        backgroundColor: "white",
        textAlign: "center",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 25px rgba(0,0,0,0.2)"
          : "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Popular Badge */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#ff5e62",
          color: "white",
          padding: "5px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        🔥 Popular
      </div>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          transition: "0.3s",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Recipe Name */}
      <h2>{recipe.title}</h2>

      {/* Rating */}
      <p>⭐ {recipe.rating} / 5</p>

      {/* Category */}
      <p>📂 {recipe.category}</p>

      {/* Cooking Time */}
      <p>⏱ {recipe.time}</p>

      {/* Difficulty */}
      <p>👨‍🍳 Difficulty: {recipe.difficulty}</p>

      {/* Favorite Button */}
      <button
        onClick={() => setFavorite(!favorite)}
        style={{
          border: "none",
          background: "none",
          fontSize: "28px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <br />

      {/* View Recipe Button */}
      <Link to={`/recipe/${recipe.id}`}>
        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ff6b35",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
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