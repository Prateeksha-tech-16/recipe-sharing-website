import { useState } from "react";
import RecipeCard from "../components/RecipeCard";

function HomePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const recipes = [
  {
    id: 1,
    title: "Margherita Pizza",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    time: "30 mins",
  },
  {
    id: 2,
    title: "Pasta Alfredo",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
    time: "25 mins",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    time: "50 mins",
  },
  {
    id: 4,
    title: "Veg Burger",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    time: "20 mins",
  },
  {
    id: 5,
    title: "Chicken Biryani",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    time: "60 mins",
  },
  {
    id: 6,
    title: "Paneer Butter Masala",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    time: "40 mins",
  },
  {
    id: 7,
    title: "Masala Dosa",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
    time: "35 mins",
  },
  {
    id: 8,
    title: "French Fries",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    time: "15 mins",
  },
  {
    id: 9,
    title: "Sandwich",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    time: "10 mins",
  },
  {
    id: 10,
    title: "Pancakes",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    time: "20 mins",
  },
  {
    id: 11,
    title: "Momos",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46",
    time: "30 mins",
  },
  {
    id: 12,
    title: "Spring Rolls",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    time: "25 mins",
  },
  {
    id: 13,
    title: "Noodles",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d",
    time: "20 mins",
  },
  {
    id: 14,
    title: "Ice Cream",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    time: "5 mins",
  },
  {
    id: 15,
    title: "Caesar Salad",
    category: "Salad",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    time: "15 mins",
  },
  {
    id: 16,
    title: "Tacos",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
    time: "25 mins",
  },
  {
    id: 17,
    title: "Sushi",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    time: "45 mins",
  },
  {
    id: 18,
    title: "Fried Rice",
    category: "Asian",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    time: "20 mins",
  },
  {
    id: 19,
    title: "Butter Chicken",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    time: "50 mins",
  },
  {
    id: 20,
    title: "Cupcakes",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    time: "35 mins",
  },
];
const filteredRecipes = recipes.filter((recipe) => {
  const matchesSearch =
    recipe.title.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || recipe.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <div>
      <h1>🍽 Recipe Sharing Website</h1>
<div style={{ marginBottom: "20px" }}>
  <input
    type="text"
    placeholder="🔍 Search recipes..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "300px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid gray",
    }}
  />

</div>

 <div style={{ marginBottom: "20px" }}>
  <button onClick={() => setCategory("All")}>
    All
  </button>

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
      <h2>Featured Recipes</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
       {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;