function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Website */}
        <div>
          <h2>🍽 Recipe Sharing Website</h2>
          <p>
            Discover delicious recipes from around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>

          <p>🏠 Home</p>
          <p>ℹ About</p>
          <p>📞 Contact</p>
          <p>➕ Add Recipe</p>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>

          <p>📧 recipe@gmail.com</p>
          <p>📱 +91 9876543210</p>
        </div>

        {/* Social */}
        <div>
          <h3>Follow Us</h3>

          <p>📘 Facebook</p>
          <p>📷 Instagram</p>
          <p>🐦 Twitter</p>
        </div>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <p style={{ textAlign: "center" }}>
        © 2026 Recipe Sharing Website. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;