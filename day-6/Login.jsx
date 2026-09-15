import { useNavigate, useLocation } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    setUser({ name: "Guest User" });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Sign In required</h2>
      <button onClick={handleLogin}>Log In to Continue</button>
    </div>
  );
}