import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ff6b35",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none" }}
      >
        Home
      </Link>

      <Link
        to="/about"
        style={{ color: "white", textDecoration: "none" }}
      >
        About
      </Link>

      <Link
        to="/contact"
        style={{ color: "white", textDecoration: "none" }}
      >
        Contact
      </Link>

      <Link
        to="/login"
        style={{ color: "white", textDecoration: "none" }}
      >
        Login
      </Link>

      <Link
        to="/register"
        style={{ color: "white", textDecoration: "none" }}
      >
        Register
      </Link>

      <Link
        to="/add"
        style={{ color: "white", textDecoration: "none" }}
      >
        Add Recipe
      </Link>

      <Link
        to="/profile"
        style={{ color: "white", textDecoration: "none" }}
      >
        Profile
      </Link>
    </nav>
  );
}

export default Navbar;