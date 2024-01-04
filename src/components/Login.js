import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic using the email and password state values
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      // props.showAlert("Successfully logged in", "success");
      Navigate("/Showcase");
    } else {
      // props.showAlert("Invalid Credentials", "Danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); //... = spread operator
  };

  return (
    <>
      <section className="showcase login">
        <div className="showcase-overlay">
          <form className="form-control" onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              value={credentials.password}
              onChange={onChange}
            />
            <button type="submit">
              Log In
            </button>
            <p>
              New User <a href="/signup">Create account</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
