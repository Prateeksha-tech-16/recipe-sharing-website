import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddRecipe from "./pages/AddRecipe";
import ProfilePage from "./pages/ProfilePage";
import RecipeDetails from "./pages/RecipeDetails";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          background: "#181a22",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "30px 20px",
            boxSizing: "border-box",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;