import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#1f2937",
        color: "white",
        marginTop: "70px",
        padding: "50px 30px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "35px",
          marginBottom: "30px",
        }}
      >
        {/* Website Info */}
        <div>
          <h2
            style={{
              color: "#ff6b35",
              marginBottom: "15px",
            }}
          >
            🍽 RecipeHub
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.7",
            }}
          >
            Discover delicious recipes from around the world.
            Share your favorite dishes and inspire thousands of
            food lovers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "15px" }}>
            Quick Links
          </h3>

          <p>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              🏠 Home
            </Link>
          </p>

          <p>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              ℹ About
            </Link>
          </p>

          <p>
            <Link
              to="/contact"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              📞 Contact
            </Link>
          </p>

          <p>
            <Link
              to="/add"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              ➕ Add Recipe
            </Link>
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 style={{ marginBottom: "15px" }}>
            Popular Categories
          </h3>

          <p>🍕 Pizza</p>
          <p>🍝 Pasta</p>
          <p>🍰 Desserts</p>
          <p>🍛 Indian Food</p>
          <p>🥗 Healthy Salads</p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ marginBottom: "15px" }}>
            Contact
          </h3>

          <p>📧 recipehub@gmail.com</p>
          <p>📱 +91 9876543210</p>
          <p>📍 India</p>

          <div
            style={{
              marginTop: "18px",
              fontSize: "28px",
            }}
          >
            <span style={{ marginRight: "12px" }}>
              📘
            </span>

            <span style={{ marginRight: "12px" }}>
              📷
            </span>

            <span style={{ marginRight: "12px" }}>
              🐦
            </span>

            <span>▶</span>
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "1px solid #374151",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          color: "#d1d5db",
        }}
      >
        <p>
          © 2026 RecipeHub. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ using React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;