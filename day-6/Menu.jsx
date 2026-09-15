import { useSearchParams, Link } from "react-router-dom";
import { dishes } from "./data"; 

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "All";

  const filteredDishes = categoryFilter === "All" 
    ? dishes 
    : dishes.filter(d => d.category === categoryFilter);

  return (
    <div>
      <h2>Addis Eats Menu</h2>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        {["All", "Main", "Side", "Drink"].map(cat => (
          <button 
            key={cat} 
            onClick={() => setSearchParams({ category: cat })}
            style={{ fontWeight: categoryFilter === cat ? 'bold' : 'normal' }}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {filteredDishes.map(dish => (
          <Link key={dish.id} to={`/menu/${dish.id}`}>
            {dish.name} - {dish.price} ETB
          </Link>
        ))}
      </div>
    </div>
  );
}