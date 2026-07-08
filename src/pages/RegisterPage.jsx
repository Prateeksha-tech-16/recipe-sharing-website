function RegisterPage() {
  return (
    <div
      style={{
        padding: "40px 20px",
        backgroundColor: "#1e1e2f",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "700",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
          lineHeight: "1.2",
        }}
      >
        ✨ Create Your Account
      </h1>

      {/* Description */}
      <p
        style={{
          color: "#d1d5db",
          fontSize: "20px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 15px",
          lineHeight: "1.7",
        }}
      >
        Join our recipe-sharing community and start sharing your
        favorite dishes with food lovers around the world.
      </p>

      {/* Quote */}
      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          fontStyle: "italic",
          marginBottom: "40px",
          fontSize: "20px",
        }}
      >
        "Cooking is an art, and sharing recipes spreads happiness."
      </p>

      {/* Form Card */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#23252f",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #555",
            background: "#2f3136",
            color: "white",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #555",
            background: "#2f3136",
            color: "white",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Create password"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #555",
            background: "#2f3136",
            color: "white",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Confirm password"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "10px",
            border: "1px solid #555",
            background: "#2f3136",
            color: "white",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Register
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#d1d5db",
          }}
        >
          Already have an account?
          <a
            href="/login"
            style={{
              color: "#ff6b35",
              marginLeft: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;