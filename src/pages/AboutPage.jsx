function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      {/* Hero Section */}

      <div
        style={{
          background: "linear-gradient(135deg,#ff9966,#ff6b35)",
          color: "white",
          padding: "70px 40px",
          borderRadius: "20px",
          textAlign: "center",
          marginBottom: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          🍽 About RecipeShare
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Discover, cook and share delicious recipes from every
          corner of the world. Our mission is to connect food
          lovers through creativity, passion and amazing meals.
        </p>
      </div>

      {/* Story & Mission */}

      <div
        style={{
          display: "flex",
          gap: "35px",
          flexWrap: "wrap",
          marginBottom: "60px",
        }}
      >
        {/* Story */}

        <div
          style={{
            flex: "1",
            minWidth: "320px",
            background: "#23252f",
            color: "white",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              color: "#ff6b35",
              marginBottom: "20px",
            }}
          >
            📖 Our Story
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            RecipeShare started with one simple dream: to bring
            food lovers together. Whether you're cooking your very
            first meal or creating restaurant-quality dishes, our
            platform helps everyone learn, share and grow.
          </p>
        </div>

        {/* Mission */}

        <div
          style={{
            flex: "1",
            minWidth: "320px",
            background: "#23252f",
            color: "white",
            padding: "35px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.30)",
          }}
        >
          <h2
            style={{
              color: "#ff6b35",
              marginBottom: "20px",
            }}
          >
            🎯 Our Mission
          </h2>

          <p
            style={{
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            We inspire millions of people to cook confidently,
            discover new cuisines and preserve family traditions
            through the joy of sharing recipes.
          </p>
        </div>
      </div>

      {/* Features */}

      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "35px",
          color: "white",
        }}
      >
        ✨ What We Offer
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginBottom: "60px",
        }}
      >
        {[
          {
            icon: "🍕",
            title: "Hundreds of Recipes",
            text: "Explore recipes from cuisines all around the world.",
          },
          {
            icon: "🔍",
            title: "Smart Search",
            text: "Quickly find recipes using search and categories.",
          },
          {
            icon: "❤️",
            title: "Save Favorites",
            text: "Bookmark recipes that you love the most.",
          },
          {
            icon: "👨‍🍳",
            title: "Share Recipes",
            text: "Upload your own recipes and inspire others.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#23252f",
              color: "white",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,.30)",
            }}
          >
            <div
              style={{
                fontSize: "55px",
                marginBottom: "15px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: "#ff6b35",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Statistics */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "60px",
        }}
      >
        {[
          {
            number: "20+",
            title: "Recipes",
          },
          {
            number: "8",
            title: "Categories",
          },
          {
            number: "500+",
            title: "Happy Users",
          },
          {
            number: "4.9★",
            title: "Average Rating",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#23252f",
              width: "220px",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,.30)",
            }}
          >
            <h1
              style={{
                color: "#ff6b35",
                marginBottom: "10px",
              }}
            >
              {item.number}
            </h1>

            <p
              style={{
                color: "#d1d5db",
                fontSize: "18px",
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}

      <div
        style={{
          background: "#23252f",
          padding: "60px 40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 12px 30px rgba(0,0,0,.35)",
          border: "1px solid #3a3d48",
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          🍴 Join Our Food Community
        </h2>

        <p
          style={{
            color: "#d1d5db",
            fontSize: "19px",
            maxWidth: "750px",
            margin: "0 auto 35px",
            lineHeight: "1.8",
          }}
        >
          Become part of RecipeShare today. Discover incredible
          recipes, share your own creations, connect with passionate
          food lovers, and make every meal a memorable experience.
        </p>

        <button
          style={{
            background: "#ff6b35",
            color: "white",
            border: "none",
            padding: "16px 38px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(255,107,53,.35)",
          }}
        >
          🍽 Explore Recipes
        </button>
      </div>
    </div>
  );
}

export default AboutPage;