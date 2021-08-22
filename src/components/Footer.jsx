import React from "react";

const footerStyle = {
  display: "flex",
  padding: "24px",
  marginTop: "90px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--grey-900)",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <img src="/logo.png" alt="Adigo logo" />
    </footer>
  );
}
