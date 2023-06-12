import React, { useState } from 'react';
import Home from './Componentes/Home';
import Filtro from './Componentes/Filtro';
import Carrinho from './Componentes/Carrinho';
import './imagens/imagem1.avif';
import './App.css';




const App = () => {
  const [productList, setProductList] = useState([
    { id: 1, name: 'Camisa Espacial 1', price: 29.99, image: './imagens/imagem1' },
    { id: 2, name: 'Camisa Espacial 2', price: 19.99, image: './imagens/imagem2' },
    { id: 3, name: 'Camisa Espacial 3', price: 24.99, image: './imagens/imagem3' },
    { id: 4, name: 'Camisa Espacial 3', price: 24.99, image: './imagens/imagem4' },
    { id: 5, name: 'Camisa Espacial 3', price: 24.99, image: './imagens/imagem5' },
    { id: 6, name: 'Camisa Espacial 3', price: 24.99, image: './imagens/imagem6' },

    
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const applyFilters = (minPrice, maxPrice, searchTerm) => {
    let filteredProducts = [...productList];

    if (minPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price >= minPrice);
    }

    if (maxPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice);
    }

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTermLower)
      );
    }

    setProductList(filteredProducts);
  };

  const resetFilters = () => {
    setProductList([
      { id: 1, name: 'Camisa Espacial 1', price: 29.99, image: 'image1.jpg' },
      { id: 2, name: 'Camisa Espacial 2', price: 19.99, image: 'image2.jpg' },
      { id: 3, name: 'Camisa Espacial 3', price: 24.99, image: 'image3.jpg' },
      { id: 4, name: 'Camisa Espacial 3', price: 24.99, image: 'image3.jpg' },
      { id: 5, name: 'Camisa Espacial 3', price: 24.99, image: 'image3.jpg' },
      { id: 6, name: 'Camisa Espacial 3', price: 24.99, image: 'image3.jpg' },
      
    ]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      <h1 className="app-title">Camisas com Estampas Espaciais</h1>
      <div className="app-content">
        <Filtro applyFilters={applyFilters} resetFilters={resetFilters} />
        <div className="app-main">
          <Home productList={productList} addToCart={addToCart} />
          <Carrinho
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
