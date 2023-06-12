import React from 'react';
import './Home.css';

const Home = ({ productList, addToCart }) => {
  return (
    <div className="home-container">
      <h2 className="section-title">Lista de Produtos</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Preço: R${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
