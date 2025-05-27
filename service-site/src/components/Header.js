import React from "react";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>SmileDent</div>
      <nav>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#appointment" style={styles.link}>Book</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#00796B",
    color: "white",
    fontWeight: "600",
  },
  logo: {
    fontSize: "1.5rem",
    fontFamily: "'Poppins', sans-serif",
  },
  link: {
    marginLeft: "1.5rem",
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
  },
};
