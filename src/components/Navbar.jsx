import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ff7043",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
      <Link to="/register" style={{ color: "white" }}>Register</Link>
      <Link to="/add" style={{ color: "white" }}>Add Recipe</Link>
      <Link to="/profile" style={{ color: "white" }}>Profile</Link>
    </nav>
  );
}

export default Navbar;