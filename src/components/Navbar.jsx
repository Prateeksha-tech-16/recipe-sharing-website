import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #ff6b35, #ff914d)",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Website Logo */}
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        🍽 RecipeShare
      </h2>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact
        </Link>

        <Link
          to="/add"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Add Recipe
        </Link>

        <Link
          to="/profile"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Profile
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;