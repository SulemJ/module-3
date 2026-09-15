import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useCartStore } from "./cart/cartStore";

export default function Layout() {
  // Narrow selector reads just the length of the items array
  const cartCount = useCartStore(s => s.items.length);

  return (
    <div>
      <header style={{ display: 'flex', gap: '15px', padding: '15px', borderBottom: '1px solid #ddd' }}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Checkout ({cartCount})</Link>
        <Link to="/login">Login</Link>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}