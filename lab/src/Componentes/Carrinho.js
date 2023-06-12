import React from 'react';
import './Carrinho.css';

const Carrinho = ({ cartItems, removeItemFromCart, totalPrice }) => {
  return (
    <div className="carrinho-container">
      <h2 className="section-title">Carrinho</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">Preço: R${item.price}</p>
                <p className="item-quantity">Quantidade: {item.quantity}</p>
                <button className="remove-btn" onClick={() => removeItemFromCart(item)}>
                  Remover
                </button>
              </div>
            ))}
            <p className="total-price">Valor Total: R${totalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrinho;
