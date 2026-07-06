function ContactPage() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>📞 Contact Us</h1>

      <p>
        We'd love to hear your feedback, suggestions, and recipe ideas!
      </p>

      <hr />

      <h3>📧 Email</h3>
      <p>support@recipesharing.com</p>

      <h3>📱 Phone</h3>
      <p>+91 XXXXX XXXXX</p>

      <h3>📍 Address</h3>
      <p>New Delhi, India</p>

      <h3>🌐 Follow Us</h3>
      <p>Instagram: @recipesharing</p>
      <p>Facebook: Recipe Sharing Website</p>
      <p>Twitter: @recipeshare</p>
    </div>
  );
}

export default ContactPage;