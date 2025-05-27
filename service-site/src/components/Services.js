import React, { useState } from "react";
import { FaTooth, FaSmile, FaBrush, FaTeeth } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaTooth size={40} color="#00796B" />,
      title: "General Dentistry",
      description: "Regular checkups, fillings, and cleanings for a healthy smile.",
    },
    {
      icon: <FaSmile size={40} color="#00796B" />,
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers to boost confidence.",
    },
    {
      icon: <FaBrush size={40} color="#00796B" />,
      title: "Preventive Care",
      description: "Professional cleaning and advice to prevent dental problems.",
    },
    {
      icon: <FaTeeth size={40} color="#00796B" />,
      title: "Orthodontics",
      description: "Braces and aligners for straighter teeth and better bite.",
    },
  ];

  // Manage focus state for styling
  const [focusedIdx, setFocusedIdx] = useState(null);

  return (
    <section id="services" style={styles.section}>
      <h2 style={styles.heading}>Our Services</h2>
      <div style={styles.cardContainer}>
        {services.map((service, idx) => (
          <article
            key={idx}
            style={{
              ...styles.card,
              boxShadow:
                focusedIdx === idx
                  ? "0 0 0 3px #00796B, 0 3px 10px rgba(0,0,0,0.1)"
                  : "0 3px 10px rgba(0,0,0,0.1)",
            }}
            tabIndex={0}
            role="group"
            aria-label={service.title}
            onFocus={() => setFocusedIdx(idx)}
            onBlur={() => setFocusedIdx(null)}
          >
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.desc}>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "#E0F2F1",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2.5rem",
    color: "#004D40",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
    maxWidth: "960px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    // outline: "none", // removed to keep focus ring
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  icon: {
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.25rem",
    marginBottom: "0.75rem",
    color: "#00796B",
  },
  desc: {
    fontSize: "1rem",
    color: "#333",
  },
};
