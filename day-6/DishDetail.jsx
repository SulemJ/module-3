import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "./data";
import { useCartStore } from "./cart/cartStore";

export default function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(s => s.addItem); // Narrow selector for the action
  
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) return <h2>Dish not found</h2>;

  const handleAddToCart = () => {
    addItem(dish);
    navigate("/menu");
  };

  return (
    <div>
      <h2>{dish.name}</h2>
      <p>Category: {dish.category}</p>
      <p>Price: {dish.price} ETB</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}