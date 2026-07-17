import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return <h2 style={{ textAlign: "center" }}>Recipe Not Found</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />

      <h1>{recipe.title}</h1>

      <p>⭐ {recipe.rating}</p>
      <p>⏱ {recipe.time}</p>
      <p>📂 {recipe.category}</p>
      <p>👨‍🍳 {recipe.difficulty}</p>

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>

      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetails;