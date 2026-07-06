function AddRecipe() {
  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>🍽️ Share Your Recipe</h1>

      <p>
        Share your culinary masterpiece and inspire others to create amazing
        dishes.
      </p>

      <blockquote>
        <i>
          "Every great recipe begins with passion and a pinch of creativity."
        </i>
      </blockquote>

      <br />

      <input
        type="text"
        placeholder="Recipe Name"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Category"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Image URL"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="text"
        placeholder="Cooking Time"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Ingredients"
        rows="5"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      ></textarea>

      <textarea
        placeholder="Instructions"
        rows="6"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      ></textarea>

      <button
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#ff6b35",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add Recipe
      </button>

      <br />
      <br />

      <h3>Recipe Submission Guidelines</h3>

      <ul>
        <li>Add a clear recipe title.</li>
        <li>Provide an attractive image.</li>
        <li>List ingredients accurately.</li>
        <li>Write easy-to-follow instructions.</li>
      </ul>
    </div>
  );
}

export default AddRecipe;