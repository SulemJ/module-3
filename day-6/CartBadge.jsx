import React from "react";
import { useCartStore } from "./cart/cartStore";

export default function CartBadge() {

    const itemCount = useCartStore((s) => s.items.length);

  return <div className="badge">Cart ({itemCount})</div>;
}