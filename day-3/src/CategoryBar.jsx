import React from "react";

export default function CategoryBar({ categories, selectedCategory, onSelect }) {
  return (
    <div>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            backgroundColor: selectedCategory === cat ? "lightblue" : "white",
            fontWeight: selectedCategory === cat ? "bold" : "normal"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}