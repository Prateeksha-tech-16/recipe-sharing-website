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
    <div
  style={{
    padding: "30px 20px",
    background: "#f8f9fc",
    minHeight: "100vh",
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
   
      {/* Website Title */}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1
          style={{
            fontSize: "48px",
            color: "#ff6b35",
            marginBottom: "10px",
          }}
        >
          🍽 Recipe Sharing Website
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
          }}
        >
          Discover • Cook • Share • Enjoy
        </p>
      </div>

      {/* Hero Banner */}

      <div
        style={{
          background: "linear-gradient(135deg,#ff9966,#ff5e62)",
          color: "white",
          padding: "90px 30px",
          borderRadius: "25px",
          textAlign: "center",
          margin: "40px auto",
          maxWidth: "1300px",
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          🍽 Discover Delicious Recipes
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "750px",
            margin: "20px auto",
            lineHeight: "1.8",
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
            borderRadius: "10px",
            background: "white",
            color: "#ff5e62",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "17px",
            transition: "0.3s",
          }}
        >
          🍴 Explore Recipes
        </button>
      </div>

      {/* Search */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "450px",
            maxWidth: "95%",
            padding: "15px",
            borderRadius: "30px",
            border: "1px solid #ddd",
            outline: "none",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            fontSize: "16px",
          }}
        />
      </div>

      {/* Category Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "50px",
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
              padding: "12px 20px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor:
                category === item ? "#ff6b35" : "#ececec",
              color:
                category === item ? "white" : "#333",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Featured Categories */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {[
          "🍕 Pizza",
          "🍜 Asian",
          "🍛 Indian",
          "🍰 Desserts",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "white",
              width: "220px",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 6px 18px rgba(0,0,0,.08)",
            }}
          >
                <h3
  style={{
    color: "#ff6b35",
    fontSize: "24px",
    marginTop: "10px",
    marginBottom: "10px",
  }}
>
                {item}
                </h3> 
          </div>
        ))}
      </div>

      {/* Statistics */}

     <div
  style={{
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "60px",
    transition: "0.3s",
    cursor: "pointer",
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
            <h2
           style={{
            color: "#ff5e62",
           fontSize: "38px",
           textAlign: "center",
           marginBottom: "15px",
            }}
          >
              {item.number}
            </h2>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div id="recipes">
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
            marginBottom: "60px",
          }}
        >
          {recipes.slice(0, 4).map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>

        <h2
  style={{
    textAlign: "center",
    color: "#ff6b35",
    fontSize: "38px",
    marginTop: "20px",
  }}
>
  🍽 All Recipes
</h2>

        <p
          style={{
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Browse every delicious recipe available on
          RecipeShare.
        </p>

        {filteredRecipes.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px",
              color: "#666",
            }}
          >
            <h2>No recipes found 😔</h2>

            <p>
              Try another search or category.
            </p>
          </div>
        ) : (
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
        )}
      </div>

      {/* Why Choose RecipeShare */}

      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#ff6b35",
            marginBottom: "40px",
          }}
        >
          ⭐ Why Choose RecipeShare?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              icon: "🍳",
              title: "Easy Cooking",
              text: "Simple recipes anyone can follow.",
            },
            {
              icon: "🌎",
              title: "Worldwide Recipes",
              text: "Explore food from every culture.",
            },
            {
              icon: "❤️",
              title: "Loved by Foodies",
              text: "Join thousands of recipe lovers.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow:
                  "0 6px 18px rgba(0,0,0,.1)",
              }}
            >
              <div style={{ fontSize: "50px" }}>
                {item.icon}
              </div>

              <h3
             style={{
             color: "#ff6b35",
             marginTop: "15px",
              }}
            >
             {item.title}
             </h3>

              <p
                style={{
                  color: "#666",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
  style={{
    marginTop: "90px",
    textAlign: "center",
    color: "#777",
    fontStyle: "italic",
    fontSize: "18px",
  }}
>
  ❤️ Cooking brings people together. Share every recipe with love.
</div>
    </div>
  );
}

export default HomePage;