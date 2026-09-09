import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "./data";

export default function DishDetail({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) return <h2>Dish not found</h2>;

  const handleAddToCart = () => {
    setCart([...cart, dish]);
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