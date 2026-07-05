import "./RecipeCard.css";

function RecipeCard({ name, image, time }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{name}</h3>
      <p>⏰ {time}</p>
    </div>
  );
}

export default RecipeCard;

