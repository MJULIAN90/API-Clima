import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div>
      <form
        class="d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          setCity("");
        }}
      >
        <input
          class="form-control me-2"
          type="search"
          placeholder="CIUDAD O PAIS"
          aria-label="Search"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
