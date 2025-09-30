import React from 'react';
import '../styles/Carrinho.css';

const CarrinhoItem = ({ item, onRemove, onUpdateQuantity }) => {
    return (
        <div className="carrinho-item">
            <img 
                src={item.image} 
                alt={item.name}
                className="carrinho-item-image"
            />
            
            <div className="carrinho-item-info">
                <h3 className="carrinho-item-title">{item.name}</h3>
                <p className="carrinho-item-description">{item.description}</p>
                <div className="carrinho-item-price">R$ {item.price.toFixed(2)}</div>
                
                <div className="carrinho-item-quantity">
                    <span>Quantidade:</span>
                    <div className="quantity-controls">
                        <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                        >
                            -
                        </button>
                        <span className="quantity-display">{item.quantity}</span>
                        <button 
                            className="quantity-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            
            <button 
                className="carrinho-remove-btn"
                onClick={() => onRemove(item.id)}
            >
                -
            </button>
        </div>
    );
};

export default CarrinhoItem;