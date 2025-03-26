import React from "react";

const CategoryFilter = ({ setGenre }) => {
  return (
    <div className="mb-3">
      <select
        className="form-select w-auto"
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="Action">Ação</option>
        <option value="Comedy">Comédia</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Terror</option>
      </select>
    </div>
  );
};

export default CategoryFilter;