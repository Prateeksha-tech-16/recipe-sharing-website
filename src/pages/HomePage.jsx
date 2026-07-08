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
          onClick={() => {
            document
              .getElementById("recipes")
              .scrollIntoView({
                behavior: "smooth",
              });
          }}
          style={{
            padding: "15px 35px",
            border: "none",
            borderRadius: "8px",
            background: "white",
            color: "#ff5e62",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🍴 Explore Recipes
        </button>
      </div>

      {/* Search */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "380px",
            padding: "14px",
            borderRadius: "30px",
            border: "1px solid #ddd",
            outline: "none",
            boxShadow: "0 3px 10px rgba(0,0,0,.12)",
            fontSize: "16px",
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
          marginBottom: "40px",
        }}
      >
        {[
          "All",
          "Pizza",
          "Pasta",
          "Dessert",
          "Indian",
          "Fast Food",
          "Salad",
          "Asian",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 18px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor:
                category === item ? "#ff6b35" : "#f2f2f2",
              color:
                category === item ? "white" : "black",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {[
          { number: "20+", title: "Recipes" },
          { number: "8", title: "Categories" },
          { number: "★★★★★", title: "Top Rated" },
          { number: "100%", title: "Homemade" },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              width: "180px",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 6px 18px rgba(0,0,0,.12)",
            }}
          >
            <h2 style={{ color: "#ff6b35" }}>
              {item.number}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div id="recipes">
        {/* Trending */}
        <h2 style={{ color: "#ff5e62" }}>
          🔥 Trending Recipes
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Most loved recipes from our collection.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginBottom: "50px",
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
        <h2>🍽 All Recipes</h2>

        <p
          style={{
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Browse every delicious recipe available on
          RecipeShare.
        </p>

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
    </div>
  );
}

export default HomePage;