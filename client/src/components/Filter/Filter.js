import React from "react";

const Filter = ({filterStatus, setFilterStatus, filterCategory, setFilterCategory}) => {
  return (
    <div className="filter">
      <h2>Filtros</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="uncompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Categoria:</p>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">Todas</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Casa">Casa</option>
            <option value="Estudo">Estudo</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
