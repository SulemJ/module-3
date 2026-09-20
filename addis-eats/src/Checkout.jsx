import { useState } from "react";
import { useCartStore } from "./store";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { total, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", area: "Bole" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const isValidPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Total: ${total} ETB`);
    clearCart();
    navigate("/", { replace: true });
  };

  if (total === 0) return <p>Your cart is empty.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout ({total} ETB)</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="09..." required />
      {!isValidPhone && form.phone && <p style={{ color: "red" }}>Use 09... or +2519...</p>}
      <button type="submit" disabled={!isValidPhone}>Place Order</button>
    </form>
  );
}