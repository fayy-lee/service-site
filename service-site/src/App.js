import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AppointmentForm from "./components/AppointmentForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
