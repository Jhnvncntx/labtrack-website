import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  function gotoMain() {
    navigate("/main");
  }
  return <button onClick={gotoMain}>MAIN</button>;
}
