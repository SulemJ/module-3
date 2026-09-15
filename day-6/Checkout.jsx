import React from "react";
import { useCartStore } from "./cart/cartStore";

export default function Checkout() {
  
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);

  const total = items.reduce((sum, dish) => sum + dish.price, 0);

  const handleCheckout = () => {
    alert(`Order placed! Total: ${total} ETB`);
    clear(); 
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: {total} ETB</p>
      <button onClick={handleCheckout} disabled={items.length === 0}>
        Place Order
      </button>
    </div>
  );
}