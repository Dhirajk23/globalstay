import React, { useState } from 'react';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/accounts/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));
        window.location.href = "/"; // refresh to show navbar updates
      } else {
        alert(data.error || "Login failed");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
