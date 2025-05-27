import React, { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "General Dentistry",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For demo, just show confirmation
    setSubmitted(true);
  }

  return (
    <section id="appointment" style={styles.section}>
      <h2 style={styles.heading}>Book an Appointment</h2>
      {submitted ? (
        <p style={styles.confirmation}>Thank you, {formData.name}! We received your appointment request.</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form} aria-label="Appointment Booking Form">
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="date" style={styles.label}>Preferred Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label htmlFor="service" style={styles.label}>Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={styles.input}
          >
            <option>General Dentistry</option>
            <option>Cosmetic Dentistry</option>
            <option>Preventive Care</option>
            <option>Orthodontics</option>
          </select>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "white",
    maxWidth: "480px",
    margin: "0 auto",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#004D40",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: "#00796B",
  },
  input: {
    marginBottom: "1.5rem",
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #B2DFDB",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#00796B",
    color: "white",
    padding: "0.75rem",
    border: "none",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  confirmation: {
    textAlign: "center",
    fontSize: "1.25rem",
    color: "#004D40",
    fontWeight: "600",
  },
};
