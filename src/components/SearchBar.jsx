import React from "react";

export default function SearchBar({
  query, 
  setQuery, 
  placeholder = "Search...",
}) {
  return (
    <div style={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '10px'
        }}
      />
    </div>
  );
}
