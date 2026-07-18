import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div style={{ padding: "30px 0" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "white",
        }}
      >
        ❤️ Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "#ffffff",
            borderRadius: "18px",
            color: "#333",
          }}
        >
          <h2>No favorite recipes yet 😋</h2>
          <p>
            Click the 🤍 button on a recipe to save it here.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;