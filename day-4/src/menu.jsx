import React, { useState, useEffect, useRef } from "react";
import { loadDishes } from "./api";
import DishList from "./DishList";
import CategoryBar from "./CatagoryBar";

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("All");
  
  const searchRef = useRef(null);

  
  useEffect(() => {
    if (!loading && searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);
      
      try {
        const data = await loadDishes(controller.signal);
        
        if (category === "All") {
          setDishes(data);
        } else {
          const filtered = data.filter(dish => dish.category === category);
          setDishes(filtered);
        }
        
        setLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading menu...</div>;
  }

  return (
    <div>
      <input 
        ref={searchRef} 
        type="text" 
        placeholder="Search for a dish..." 
      />
      
      <CategoryBar 
        categories={["All", "Main", "Side", "Drink"]} 
        selectedCategory={category} 
        onSelect={setCategory} 
      />
      
      <DishList dishes={dishes} />
    </div>
  );
}