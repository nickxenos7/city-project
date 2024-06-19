import React, { useState } from "react";
import axios from "axios";
import "../Login/Login.css";

const Register = ({ onClose, onSignup }) => {
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3307/register", {
        username,
        full_name,
        email,
        password,
      });
      setMessage("Registration successful");
      onSignup(username,full_name, email, password); 
      setTimeout(() => {
        setMessage("");
        onClose();
      }, 2000);
    } catch (error) {
      setMessage("Error during registration");
    }
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Full_name"
            value={full_name}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn dark-btn">
            Sign Up
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Register;


