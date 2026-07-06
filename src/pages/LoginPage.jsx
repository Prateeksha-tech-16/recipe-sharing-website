function LoginPage() {
  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h1>🔐 Welcome Back</h1>

      <p>
        Sign in to continue your culinary journey and explore delicious
        recipes shared by food lovers around the world.
      </p>

      <blockquote>
        <i>
          "Good food brings people together, and every recipe tells a story."
        </i>
      </blockquote>

      <br />

      <input
        type="email"
        placeholder="Enter your email"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Enter your password"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

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
        Login
      </button>

      <p style={{ marginTop: "20px" }}>
        Forgot Password? Click here to reset.
      </p>
    </div>
  );
}

export default LoginPage;