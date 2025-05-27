import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Us</h2>
      <ul style={styles.list}>
        <li style={styles.item}>
          <FaPhone style={styles.icon} aria-hidden="true" />
          <a href="tel:+1234567890" style={styles.link}>(123) 456-7890</a>
        </li>
        <li style={styles.item}>
          <FaEnvelope style={styles.icon} aria-hidden="true" />
          <a href="mailto:info@smiledent.com" style={styles.link}>info@smiledent.com</a>
        </li>
        <li style={styles.item}>
          <FaMapMarkerAlt style={styles.icon} aria-hidden="true" />
          123 Smile Street, Happy Town, CA 90210
        </li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#E0F2F1",
    padding: "3rem 2rem",
    fontFamily: "'Poppins', sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    color: "#004D40",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.1rem",
    color: "#004D40",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  icon: {
    marginRight: "0.75rem",
    color: "#00796B",
  },
  link: {
    color: "#00796B",
    textDecoration: "none",
  },
};
