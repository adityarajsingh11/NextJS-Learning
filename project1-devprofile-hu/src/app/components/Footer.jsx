export default function Footer() {
  return (
    <footer style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      backgroundColor: "#111",
      color: "white",
      marginTop: "60px"
    }}>

      {/* Left - Brand */}
      <h3 style={{ margin: 0 }}>
        DevProfile 🚀
      </h3>

      {/* Center - Tagline */}
      <p style={{ margin: 0, color: "#bbb", fontSize: "14px" }}>
        Build & showcase developer profiles
      </p>

      {/* Right - Copyright */}
      <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>
        © 2026
      </p>

    </footer>
  )
}