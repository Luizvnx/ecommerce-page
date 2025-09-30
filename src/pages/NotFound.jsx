import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="not-found-container">
                <div className="not-found-content">
                    <div className="not-found-illustration">
                        <div className="not-found-number">404</div>
                        <div className="not-found-icon">🚫</div>
                    </div>
                    
                    <h1 className="not-found-title">Página Não Encontrada</h1>
                    
                    <p className="not-found-message">
                        A página que você está procurando não existe ou foi movida.
                    </p>
                    
                    <div className="not-found-actions">
                        <Link to="/" className="btn btn-primary">
                            Voltar para Home
                        </Link>
                        <Link to="/carrinho" className="btn btn-outline">
                            Ir para Carrinho
                        </Link>
                    </div>
                    
                    <div className="not-found-links">
                        <p>Ou explore outras páginas:</p>
                        <div className="not-found-nav-links">
                            <Link to="/">Home</Link>
                            <Link to="/carrinho">Carrinho</Link>
                            <Link to="/ajuda">Ajuda</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;