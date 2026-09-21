import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "./data";
import { useCartStore } from "./store";

export default function DishDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const addItem = useCartStore(s => s.addItem);
  

  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) return <h2>Dish not found</h2>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{dish.name} {dish.spicy && "🌶️"}</h2>
      <p>Category: {dish.category}</p>
      <p>Price: {dish.price} ETB</p>
      <button onClick={() => addItem(dish)}>Add to Cart</button>
    </div>
  );
}