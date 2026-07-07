import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* Website Title */}
      <h1 style={{ textAlign: "center" }}>
        🍽 Recipe Sharing Website
      </h1>

      {/* Hero Banner */}
      <div
        style={{
          background: "linear-gradient(135deg,#ff9966,#ff5e62)",
          color: "white",
          padding: "60px 20px",
          borderRadius: "15px",
          textAlign: "center",
          margin: "30px 0",
        }}
      >
        <h1>🍽 Discover Delicious Recipes</h1>

        <p
          style={{
            fontSize: "18px",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          Explore delicious recipes from around the world.
          Cook, Share and Inspire with thousands of food lovers.
        </p>

        <button
          style={{
            padding: "15px 35px",
            border: "none",
            borderRadius: "8px",
            background: "white",
            color: "#ff5e62",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🍴 Explore Recipes
        </button>
      </div>

      {/* Search */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "320px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <button onClick={() => setCategory("All")}>All</button>

        <button onClick={() => setCategory("Pizza")}>
          🍕 Pizza
        </button>

        <button onClick={() => setCategory("Pasta")}>
          🍝 Pasta
        </button>

        <button onClick={() => setCategory("Dessert")}>
          🍰 Desserts
        </button>

        <button onClick={() => setCategory("Indian")}>
          🍛 Indian
        </button>

        <button onClick={() => setCategory("Fast Food")}>
          🍔 Fast Food
        </button>

        <button onClick={() => setCategory("Salad")}>
          🥗 Salads
        </button>

        <button onClick={() => setCategory("Asian")}>
          🍜 Asian
        </button>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          textAlign: "center",
          margin: "40px 0",
        }}
      >
        <div>
          <h2>20+</h2>
          <p>Recipes</p>
        </div>

        <div>
          <h2>8</h2>
          <p>Categories</p>
        </div>

        <div>
          <h2>★★★★★</h2>
          <p>Top Rated</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Homemade</p>
        </div>
      </div>

      {/* Trending Recipes */}
      <h2
        style={{
          color: "#ff5e62",
          marginBottom: "20px",
        }}
      >
        🔥 Trending Recipes
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {recipes.slice(0, 4).map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>

      {/* All Recipes */}
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        🍽 All Recipes
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;