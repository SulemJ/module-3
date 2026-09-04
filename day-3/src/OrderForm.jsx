import React, { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidPhone = /^(09|07)\d{8}$/.test(formData.phone);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="TeleBirr Phone (09... or 07...)"
      />
      <input
        name="area"
        value={formData.area}
        onChange={handleChange}
        placeholder="Area"
      />
      <button disabled={!isValidPhone} type="submit">
        Checkout
      </button>
    </form>
  );
}