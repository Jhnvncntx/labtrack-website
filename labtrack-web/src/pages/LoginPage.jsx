// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import loginBgImage from "../assets/LT-login-bg-2.png";
import "./LoginPage.css";

export function LoginPage() {
  // const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // function login() {
  //   if (username === "adolgagi" && password === "adolfo123") {
  //     navigate("/main");
  //   }
  // }
  return (
    <div
      className="login-page-container"
      style={{
        backgroundImage: `url(${loginBgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-overlay">
        <LoginForm />
        {/* <div className="login-form-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="e.g. jhnvncntx"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="at least 8 characters"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={login}>
            SIGN IN
          </button>
        </div> */}
      </div>
    </div>
  );
}
