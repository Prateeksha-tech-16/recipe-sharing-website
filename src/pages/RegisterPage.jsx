function RegisterPage() {
  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h1>✨ Create Your Account</h1>

      <p>
        Join our recipe-sharing community and start sharing your favorite
        dishes with food enthusiasts around the world.
      </p>

      <blockquote>
        <i>
          "Cooking is an art, and sharing recipes is spreading happiness."
        </i>
      </blockquote>

      <br />

      <input
        type="text"
        placeholder="Enter your name"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="email"
        placeholder="Enter your email"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Create password"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Confirm password"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Register
      </button>
    </div>
  );
}

export default RegisterPage;