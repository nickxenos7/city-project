import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Upper from "./Components/Upper/Upper";
import Activities from "./Components/Activities/Activities";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Modal from "./Components/Modal/Modal";
import axios from "axios";
import "./Components/Navbar/Navbar.css"; 

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("http://localhost:3307/check-session", { withCredentials: true });
        if (response.data.user) {
          setUser(response.data.user);
          setWelcomeMessage(`Welcome back, ${response.data.user.full_name}!`);
        }
      } catch (error) {
        console.error("Error checking session", error);
      }
    };

    checkSession();
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    setWelcomeMessage(`Welcome, ${user.full_name}!`);
  };

  const handleSignup = (username, password, email, fullName) => {
    setWelcomeMessage(`Welcome, ${fullName}!`);
  };

  return (
    <div>
      <Navbar
        onLoginClick={() => setShowLoginModal(true)}
        onRegisterClick={() => setShowRegisterModal(true)}
        user={user} 
      />
      {welcomeMessage && <div className="welcome-message">{welcomeMessage}</div>}
      <Upper />
      <div className="container">
        <Title subTitle="OUR ACTIVITIES" title="What we offer" />
        <Activities />
        <About />
        <Title subTitle="TESTIMONIALS" title="What our clients say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Connect with Us" />
        <Contact />
        <Footer />
      </div>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} title="Login">
          <Login onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />
        </Modal>
      )}
      {showRegisterModal && (
        <Modal onClose={() => setShowRegisterModal(false)} title="Register">
          <Register onClose={() => setShowRegisterModal(false)} onSignup={handleSignup} />
        </Modal>
      )}
    </div>
  );
};

export default App;
