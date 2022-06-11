import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login--logo"
          src="https://cdn.iconscout.com/icon/free/png-256/remove-cart-2130851-1794982.png"
          alt="amazon"
        />
      </Link>
      <div className="login--container">
        <div className="login--header">
          <img
            className="login--person"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKi-dTKsqe-aBxkOJnNmIGZYcXM0zQDKQOKZmqjDfINherAww6IGqvB8k44XwNhYTSus&usqp=CAU"
            alt="person"
          />
          <h1>Sign-In</h1>
        </div>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button type="submit" onClick={signIn} className="login--signButton">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account yet?
          <br />
          Click below and create your account now.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login--registerButton"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
