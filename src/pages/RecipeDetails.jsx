import { Link } from "react-router-dom";
function RecipeDetails() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>🍕 Classic Margherita Pizza</h1>

      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        alt="Pizza"
        style={{
          width: "100%",
          borderRadius: "12px",
        }}
      />

      <h2>Ingredients</h2>

      <ul>
        <li>Pizza Dough</li>
        <li>Tomato Sauce</li>
        <li>Fresh Mozzarella</li>
        <li>Basil Leaves</li>
        <li>Olive Oil</li>
      </ul>

      <h2>Instructions</h2>

      <ol>
        <li>Preheat oven to 220°C.</li>
        <li>Spread tomato sauce.</li>
        <li>Add mozzarella cheese.</li>
        <li>Bake for 12–15 minutes.</li>
        <li>Garnish with basil and serve.</li>
      </ol>

      <p><strong>Cooking Time:</strong> 30 mins</p>

      <p><strong>Difficulty:</strong> Easy</p>

      <p><strong>Rating:</strong> ⭐ 4.8 / 5</p>
    </div>
  );
}
<Link to="/">
  <button
    style={{
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#ff6b35",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    ⬅ Back to Home
  </button>
</Link>

export default RecipeDetails;