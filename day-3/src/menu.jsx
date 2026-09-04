import React, { useState } from "react";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import OrderForm from "./OrderForm";
import { dishes, categories } from "./data";

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);

  const filteredDishes = category === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category === category);

  return (
    <div>
      <CategoryBar 
        categories={categories} 
        selectedCategory={category} 
        onSelect={setCategory} 
      />
      <DishList 
        dishes={filteredDishes} 
        onAdd={(price) => setOrderTotal(prev => prev + price)} 
      />
      <h2>Total: {orderTotal} ETB</h2>
      <OrderForm />
    </div>
  );
}