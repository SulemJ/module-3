import { useSearchParams, Link } from "react-router-dom";
import { dishes } from "./data";

export default function Menu() {
 
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "All";

  const filteredDishes = category === "All" 
    ? dishes 
    : dishes.filter(d => d.category === category);

  return (
    <div>
      <h2>Menu</h2>
      <div style={{ marginBottom: "20px" }}>
        {["All", "Main", "Side", "Drink"].map(cat => (
          <button 
            key={cat} 
            onClick={() => setParams({ category: cat })}
            style={{ fontWeight: category === cat ? "bold" : "normal" }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        {filteredDishes.length === 0 ? (
          <p>No dishes found.</p>
        ) : (
          filteredDishes.map(dish => (
            <div key={dish.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{dish.name} - {dish.price} ETB</h3>
              <Link to={`/menu/${dish.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}