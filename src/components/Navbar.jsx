import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: "white",
    textDecoration: "none",
    fontWeight: isActive ? "700" : "600",
    padding: "10px 18px",
    borderRadius: "10px",
    background: isActive
      ? "rgba(255,255,255,0.22)"
      : "transparent",
    border: isActive
      ? "1px solid rgba(255,255,255,0.35)"
      : "1px solid transparent",
    transition: "all 0.3s ease",
    display: "inline-block",
  });

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const handleMouseLeave = (e) => {
    if (!e.currentTarget.getAttribute("aria-current")) {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.border = "1px solid transparent";
    }
    e.currentTarget.style.transform = "translateY(0)";
  };

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
        boxShadow: "0 8px 20px rgba(0,0,0,.18)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}

      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontWeight: "700",
            letterSpacing: "1px",
            fontSize: "30px",
          }}
        >
          🍽 RecipeShare
        </h2>
      </NavLink>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <NavLink
          to="/"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact
        </NavLink>

        <NavLink
          to="/add"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Add Recipe
        </NavLink>

        <NavLink
          to="/profile"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Profile
        </NavLink>

        <NavLink
          to="/login"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Login
        </NavLink>

        <NavLink
          to="/register"
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Register
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;