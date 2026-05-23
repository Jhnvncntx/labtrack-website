import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginBanner from "../assets/LoginBanner.png";
import "./LoginForm.css";

export function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    if (username === "adolgagi" && password === "adolfo123") {
      navigate("/main");
    }
  }

  return (
    <div className="form-container">
      <div className="form-heading">
        <img src={LoginBanner} className="banner-image" />
      </div>
      <div className="form-body">This is the form body</div>
    </div>
  );
}
