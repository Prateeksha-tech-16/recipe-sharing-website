function ProfilePage() {
  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "auto" }}>
      <h1>👨‍🍳 My Profile</h1>

      <p>
        Manage your account, track your recipes, and showcase your cooking
        journey.
      </p>

      <blockquote>
        <i>
          "A recipe has no soul. You, as the cook, bring soul to the recipe."
        </i>
      </blockquote>

      <br />

      <h2>User Information</h2>

      <p>
        <strong>Name:</strong> Prateeksha
      </p>

      <p>
        <strong>Email:</strong> example@gmail.com
      </p>

      <hr />

      <h2>Profile Statistics</h2>

      <p>🍲 Recipes Shared: 20</p>
      <p>❤️ Favorite Recipes: 15</p>
      <p>⭐ Average Rating: 4.8</p>
      <p>📅 Member Since: July 2025</p>

      <hr />

      <h2>Recent Activity</h2>

      <ul>
        <li>Added Margherita Pizza</li>
        <li>Added Chocolate Cake</li>
        <li>Added Pasta Alfredo</li>
        <li>Added Chicken Biryani</li>
      </ul>
    </div>
  );
}

export default ProfilePage;