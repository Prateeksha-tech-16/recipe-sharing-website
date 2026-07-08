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

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "12px",
          transition: "0.35s",
          transform: isHovered ? "scale(1.06)" : "scale(1)",
        }}
      />

      {/* Recipe Name */}
      <h2
        style={{
          color: "#222222",
          fontSize: "26px",
          fontWeight: "700",
          marginTop: "18px",
          marginBottom: "15px",
          lineHeight: "1.3",
          minHeight: "68px",
        }}
      >
        {recipe.title}
      </h2>

      {/* Rating */}
      <p
        style={{
          color: "#555",
          fontSize: "18px",
          margin: "8px 0",
        }}
      >
        ⭐ {recipe.rating} / 5
      </p>

      {/* Category */}
      <p
        style={{
          color: "#555",
          fontSize: "18px",
          margin: "8px 0",
        }}
      >
        📂 {recipe.category}
      </p>

      {/* Time */}
      <p
        style={{
          color: "#555",
          fontSize: "18px",
          margin: "8px 0",
        }}
      >
        ⏱ {recipe.time}
      </p>

      {/* Difficulty */}
      <p
        style={{
          color: "#555",
          fontSize: "18px",
          margin: "8px 0 18px",
        }}
      >
        👨‍🍳 Difficulty: {recipe.difficulty}
      </p>

      {/* Favourite Button */}
      <button
        onClick={() => setFavorite(!favorite)}
        style={{
          border: "none",
          background: "none",
          fontSize: "30px",
          cursor: "pointer",
          marginBottom: "18px",
          transition: "0.3s",
        }}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      {/* View Button */}
      <Link to={`/recipe/${recipe.id}`}>
        <button
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#ff6b35",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          📖 View Full Recipe
        </button>
      </Link>
    </div>
  );
}

export default RecipeCard;