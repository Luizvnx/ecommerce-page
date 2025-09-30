import React, { useState } from 'react';
import CarrinhoItem from '../components/CarrinhoItem';
import '../styles/Carrinho.css';

const initialCartItems = [
    {
        id: 1,
        name: "Jaqueta Blindada",
        description: "Tamanho G, Couro sintético, Blindagem anti balas NIJ III-A",
        price: 1299.99,
        quantity: 2,
        image: "/jaqueta.webp"
    }
];

const Carrinho = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleRemoveItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const handleUpdateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === itemId 
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const calcularTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const limparCarrinho = () => {
        setCartItems([]);
    };

    const resetarCarrinho = () => {
        setCartItems(initialCartItems);
    };

    if (cartItems.length === 0) {
        return (
            <div className="carrinho-page">
                <div className="carrinho-vazio">
                    <h1>Meu Carrinho</h1>
                    <p>Seu carrinho está vazio</p>
                    <button 
                        className="btn btn-primary"
                        onClick={resetarCarrinho}
                    >
                        Adicionar Itens de Exemplo
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="carrinho-page">
            <div className="carrinho-header">
                <h1>Meu Carrinho</h1>
                <div className="carrinho-actions">
                    <button 
                        className="btn btn-secondary"
                        onClick={resetarCarrinho}
                    >
                        Resetar Carrinho
                    </button>
                    <button 
                        className="btn btn-accent"
                        onClick={limparCarrinho}
                    >
                        Limpar Carrinho
                    </button>
                </div>
            </div>

            <div className="carrinho-summary">
                <div>
                    <strong>Total de Itens: {getTotalItems()}</strong>
                </div>
                <div>
                    <strong>Preço Total: R$ {calcularTotal().toFixed(2)}</strong>
                </div>
            </div>

            <div className="carrinho-items">
                {cartItems.map(item => (
                    <CarrinhoItem 
                        key={item.id}
                        item={item}
                        onRemove={handleRemoveItem}
                        onUpdateQuantity={handleUpdateQuantity}
                    />
                ))}
            </div>

            <div className="carrinho-checkout">
                <h2>Resumo do Pedido</h2>
                <div className="checkout-total">
                    <strong>Total: R$ {calcularTotal().toFixed(2)}</strong>
                </div>
                <button className="btn btn-primary checkout-btn">
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
};

export default Carrinho;