import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post("http://localhost:3307/login", { email, password });
        setMessage("Login successful");
        onLogin(response.data.user);
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 2000);
      } else {
        const response = await axios.post("http://localhost:3307/register", { email, password });
        setMessage("Registration successful");
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 2000);
      }
    } catch (error) {
      setMessage("Error during login/registration");
    }
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
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
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        {message && <p>{message}</p>}
        <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
