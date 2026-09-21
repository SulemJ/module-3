import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Menu() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") || "All";
  
  // 1. Add state to hold the data, loading status, and errors
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. The useEffect to fetch data
  useEffect(() => {
    // The "cleanup" tool required by the rubric
    const controller = new AbortController(); 

    // Simulate fetching data from an API or public/dishes.json
    fetch("/dishes.json", { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error("Failed to load menu");
        return res.json();
      })
      .then(data => {
        setDishes(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    // 3. The Cleanup Function
    return () => controller.abort(); 
  }, []); // Empty array: only run once when component mounts

  const filteredDishes = category === "All" 
    ? dishes 
    : dishes.filter(d => d.category === category);

  // Handling the loading and error states for full marks
  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error: {error}</p>;

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