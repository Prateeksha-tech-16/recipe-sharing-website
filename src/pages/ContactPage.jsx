function ContactPage() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>📞 Contact Us</h1>

      <p>
        We'd love to hear from you!
      </p>

      <input
        type="text"
        placeholder="Your Name"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <input
        type="email"
        placeholder="Your Email"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <textarea
        placeholder="Write your message..."
        rows="6"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      ></textarea>

      <button
        style={{
          padding: "12px 25px",
          background: "#ff6b35",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default ContactPage;