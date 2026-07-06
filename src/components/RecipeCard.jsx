function RecipeCard({ recipe }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>{recipe.title}</h2>

      <p>
        <strong>Cooking Time:</strong> {recipe.time}
      </p>

      <button
        style={{
          backgroundColor: "#ff6b35",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View Recipe
      </button>
    </div>
  );
}

export default RecipeCard;