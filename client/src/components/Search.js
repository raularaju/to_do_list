import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o nome da tarefa"
      />
    </div>
  );
};

export default Search;
