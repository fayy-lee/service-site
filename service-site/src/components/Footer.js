import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} SmileDent. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#004D40",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    fontFamily: "'Poppins', sans-serif",
    marginTop: "3rem",
  },
};
