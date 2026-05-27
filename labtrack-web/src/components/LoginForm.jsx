import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import LoginBanner from "../assets/LoginBanner.png";
import users from "../data/users";
import "./LoginForm.css";

export function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Borrower");
  const [message, setMessage] = useState("");
  const [inputClass, setInputClass] = useState("");
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const changeRole = (newRole) => {
    setRole(newRole);
  };

  function login() {
    if (username === "") {
      setMessage("Username cannot be empty.");
      if (usernameRef.current) usernameRef.current.focus();
      return;
    } else if (password === "") {
      setMessage("Password cannot be empty.");
      if (passwordRef.current) passwordRef.current.focus();
      return;
    }
    try {
      if (username === "") throw new Error("Username cannot be empty.");
      if (password === "") throw new Error("Password cannot be empty.");

      const foundUser = users.find(
        (user) =>
          user.username === username &&
          user.role === role &&
          user.password === password,
      );

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        navigate("/main");
      } else {
        setInputClass("invalid");
        setUsername("");
        setPassword("");
        if (usernameRef.current) usernameRef.current.focus();
        throw new Error("Invalid credentials.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      console.log("Atempted login");
    }
  }

  return (
    <div className="form-container">
      <div className="form-heading">
        <img src={LoginBanner} className="banner-image" />
      </div>
      <div className="form-body">
        <h3>Welcome back!</h3>
        <p className="welcome-description">Sign in to access the system.</p>
        <div className="user-pass-container">
          <label>Username</label>
          <input
            ref={usernameRef}
            className={`login-input ${inputClass}`}
            type="text"
            id="usernameInput"
            placeholder="iamdelta67"
            value={username}
            onChange={(event) => {
              setMessage("");
              setInputClass("");
              setUsername(event.target.value);
            }}
          />
          <label>Password</label>
          <input
            ref={passwordRef}
            className={`login-input ${inputClass}`}
            type="password"
            id="passwordInput"
            placeholder="enter your password"
            value={password}
            onChange={(event) => {
              setMessage("");
              setInputClass("");
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="role-container">
          <div
            className={`toggle-role ${role === "Borrower" ? "active-role" : ""} ${role.toLocaleLowerCase()}`}
            onClick={() => changeRole("Borrower")}
          >
            Borrower
          </div>
          <div
            className={`toggle-role ${role === "Admin" ? "active-role" : ""} ${role.toLocaleLowerCase()}`}
            onClick={() => changeRole("Admin")}
          >
            Admin
          </div>
        </div>
        <p className="message">{message}</p>
        <button className="sign-in-btn" onClick={login}>
          Sign In
        </button>
      </div>
      <div className="form-footing">LabTrack © 2026 - All Rights Reserved.</div>
    </div>
  );
}
