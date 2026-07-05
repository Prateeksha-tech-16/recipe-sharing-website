import RecipeCard from "../components/RecipeCard";

function HomePage() {
  const recipes = [
    {
      name: "Margherita Pizza",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
      time: "30 minutes",
    },
    {
      name: "Pasta Alfredo",
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
      time: "25 minutes",
    },
    {
      name: "Chocolate Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      time: "45 minutes",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>🍽️ Recipe Sharing Website</h1>
        <p>
          Discover delicious recipes, share your favorites,
          and explore dishes from around the world.
        </p>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2>✨ Features</h2>
        <ul>
          <li>Browse amazing recipes</li>
          <li>Add your own recipes</li>
          <li>Create your profile</li>
          <li>Share recipes with others</li>
        </ul>
      </div>

      {/* Featured Recipes */}
      <div>
        <h2>🍴 Featured Recipes</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              name={recipe.name}
              image={recipe.image}
              time={recipe.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;