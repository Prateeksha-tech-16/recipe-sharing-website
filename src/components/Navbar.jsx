import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    padding: "10px 18px",
    borderRadius: "10px",
    backgroundColor: isActive
      ? "rgba(255,255,255,0.25)"
      : "transparent",
    transition: "0.3s ease",
  });

  return (
    <nav
      style={{
        background: "linear-gradient(90deg,#ff6b35,#ff914d)",
        padding: "15px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 15px rgba(0,0,0,.25)",
      }}
    >
      {/* Logo */}

      <h2
        style={{
          color: "white",
          margin: 0,
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        🍽 RecipeShare
      </h2>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>

        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>

        <NavLink to="/add" style={linkStyle}>
          Add Recipe
        </NavLink>

        <NavLink to="/profile" style={linkStyle}>
          Profile
        </NavLink>

        <NavLink to="/login" style={linkStyle}>
          Login
        </NavLink>

        <NavLink to="/register" style={linkStyle}>
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;