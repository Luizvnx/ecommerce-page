import React from 'react';
import '../styles/Ajuda.css';

const Ajuda = () => (
    <div className="ajuda-page">
        <div className="ajuda-container">
            <div className="construction-icon">🚧</div>
            <h1 className="construction-title">Página em Construção</h1>
            <p className="construction-text">
                Estamos trabalhando para trazer esta página em breve. 
                Enquanto isso, você pode explorar outras seções do site.
            </p>
            <div className="construction-links">
                <a href="/" className="btn btn-primary">Voltar para Home</a>
                <a href="/carrinho" className="btn btn-outline">Ver Carrinho</a>
            </div>
        </div>
    </div>
);

export default Ajuda;