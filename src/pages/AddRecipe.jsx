function AddRecipe() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>➕ Add New Recipe</h1>

      <input type="text" placeholder="Recipe Name" /><br /><br />

      <input type="text" placeholder="Image URL" /><br /><br />

      <input type="text" placeholder="Cooking Time" /><br /><br />

      <textarea placeholder="Ingredients"></textarea><br /><br />

      <textarea placeholder="Instructions"></textarea><br /><br />

      <button>Add Recipe</button>
    </div>
  );
}

export default AddRecipe;