import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [itens, setItens] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        setItens((prevItens) => [...prevItens, produto]);
    };

    const removerItem = (id) => {
        setItens((prevItens) => prevItens.filter(item => item.id !== id));
    };

    const limparCarrinho = () => {
        setItens([]);
    };

    return (
        <CarrinhoContext.Provider
            value={{
                itens,
                adicionarAoCarrinho,
                removerItem,
                limparCarrinho,
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
};