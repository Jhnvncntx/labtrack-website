import { LoginForm } from "../components/LoginForm";
import loginBgImage from "../assets/LT-login-bg-2.png";
import "./LoginPage.css";

export function LoginPage() {
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
      </div>
    </div>
  );
}
