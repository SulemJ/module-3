import React, { useState } from "react";

function Dish({ dish, onAdd }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{dish.name} - {dish.price} ETB</p>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(count + 1);
        onAdd(dish.price);
      }}>
        Add
      </button>
    </div>
  );
}

export default function DishList({ dishes, onAdd }) {
  return (
    <div>
      {dishes.map(dish => (
        <Dish key={dish.id} dish={dish} onAdd={onAdd} />
      ))}
    </div>
  );
}