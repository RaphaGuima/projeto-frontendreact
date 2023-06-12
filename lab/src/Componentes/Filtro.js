import React, { useState } from 'react';
import './Filtro.css';

const Filtro = ({ applyFilters, resetFilters }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = () => {
    applyFilters(minPrice, maxPrice, searchTerm);
  };

  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setSearchTerm('');
    resetFilters();
  };

  return (
    <div className="filtro-container">
      <h2 className="section-title">Filtrar Produtos</h2>
      <div className="filtro-form">
        <label htmlFor="minPrice">Preço Mínimo:</label>
        <input type="text" id="minPrice" value={minPrice} onChange={handleMinPriceChange} />

        <label htmlFor="maxPrice">Preço Máximo:</label>
        <input type="text" id="maxPrice" value={maxPrice} onChange={handleMaxPriceChange} />

        <label htmlFor="searchTerm">Buscar por Nome:</label>
        <input type="text" id="searchTerm" value={searchTerm} onChange={handleSearchTermChange} />

        <div className="filtro-btn-group">
          <button className="filtro-btn" onClick={handleFilter}>
            Aplicar Filtros
          </button>
          <button className="filtro-btn" onClick={handleReset}>
            Resetar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filtro;
