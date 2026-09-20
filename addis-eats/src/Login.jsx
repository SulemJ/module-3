import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [phone, setPhone] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || "/menu";

  const handleLogin = (e) => {
    e.preventDefault();
    login(phone);
    navigate(from, { replace: true }); 
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Sign In</h2>
      <input 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        placeholder="Enter Phone Number" 
      />
      <button type="submit">Login</button>
    </form>
  );
}