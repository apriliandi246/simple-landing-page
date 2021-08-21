import React from "react";

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <img src="/logo.png" alt="Adigo logo" />
    </footer>
  );
}

const footerStyle = {
  display: "flex",
  padding: "24px",
  marginTop: "90px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--grey-900)",
};
