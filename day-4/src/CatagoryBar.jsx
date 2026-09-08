import React from "react";

export default function CategoryBar({ categories, selectedCategory, onSelect }) {
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            backgroundColor: selectedCategory === cat ? "orange" : "gray",
            marginRight: "10px"
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}