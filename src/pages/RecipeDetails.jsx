import { Link } from "react-router-dom";

function RecipeDetails() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Recipe Title */}
      <h1
        style={{
          textAlign: "center",
          color: "#ff6b35",
          marginBottom: "20px",
        }}
      >
        🍕 Classic Margherita Pizza
      </h1>

      {/* Recipe Image */}
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
        alt="Classic Margherita Pizza"
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      />

      {/* Description */}
      <p
        style={{
          marginTop: "25px",
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#555",
          textAlign: "center",
        }}
      >
        Enjoy a classic Italian Margherita Pizza topped with fresh mozzarella,
        basil leaves, rich tomato sauce, and crispy homemade crust. A perfect
        recipe for lunch, dinner, or weekend gatherings.
      </p>

      {/* Recipe Information */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "35px 0",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#fff8f2",
            padding: "20px",
            borderRadius: "12px",
            width: "180px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>⏱ Time</h3>
          <p>30 mins</p>
        </div>

        <div
          style={{
            background: "#fff8f2",
            padding: "20px",
            borderRadius: "12px",
            width: "180px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>👨‍🍳 Difficulty</h3>
          <p>Easy</p>
        </div>

        <div
          style={{
            background: "#fff8f2",
            padding: "20px",
            borderRadius: "12px",
            width: "180px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>⭐ Rating</h3>
          <p>4.8 / 5</p>
        </div>

        <div
          style={{
            background: "#fff8f2",
            padding: "20px",
            borderRadius: "12px",
            width: "180px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>📂 Category</h3>
          <p>Pizza</p>
        </div>
      </div>

      {/* Ingredients */}
      <div
        style={{
          background: "#fff8f3",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#ff6b35" }}>🥗 Ingredients</h2>

        <ul style={{ lineHeight: "2", fontSize: "17px" }}>
          <li>🍞 Pizza Dough</li>
          <li>🍅 Tomato Sauce</li>
          <li>🧀 Fresh Mozzarella Cheese</li>
          <li>🌿 Fresh Basil Leaves</li>
          <li>🫒 Olive Oil</li>
          <li>🧂 Salt & Oregano</li>
        </ul>
      </div>

      {/* Instructions */}
      <div
        style={{
          background: "#f8f8f8",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h2 style={{ color: "#ff6b35" }}>👩‍🍳 Instructions</h2>

        <ol style={{ lineHeight: "2", fontSize: "17px" }}>
          <li>Preheat your oven to 220°C.</li>
          <li>Roll out the pizza dough evenly.</li>
          <li>Spread tomato sauce over the base.</li>
          <li>Add fresh mozzarella slices.</li>
          <li>Drizzle olive oil and sprinkle oregano.</li>
          <li>Bake for 12–15 minutes until golden brown.</li>
          <li>Top with fresh basil leaves before serving.</li>
        </ol>
      </div>

      {/* Back Button */}
      <div
        style={{
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        <Link to="/">
          <button
            style={{
              padding: "12px 30px",
              backgroundColor: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            ⬅ Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;