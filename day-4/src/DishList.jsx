import React from "react";

export default function DishList({ dishes }) {
  if (dishes.length === 0) {
    return <p>No dishes found for this category.</p>;
  }

  return (
    <div>
      {dishes.map(dish => (
        <div key={dish.id}>
          <h3>{dish.name} {dish.spicy ? "" : ""}</h3>
          <p>{dish.category} - {dish.price} ETB</p>
        </div>
      ))}
    </div>
  );
}