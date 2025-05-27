import React from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Brighten Your Smile with Expert Care</h1>
      <p style={styles.subtitle}>
        Trusted dental services for your family’s health and confidence.
      </p>
      <a href="#appointment" style={styles.ctaButton}>Book an Appointment</a>
    </section>
  );
}

const styles = {
  hero: {
    backgroundColor: "#004D40",
    color: "white",
    textAlign: "center",
    padding: "5rem 2rem",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: "2.8rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  ctaButton: {
    backgroundColor: "#26A69A",
    color: "white",
    padding: "0.75rem 2rem",
    borderRadius: "30px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "1rem",
  },
};
