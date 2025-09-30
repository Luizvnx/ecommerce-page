import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import LoginModal from "./LoginModal";
import "../styles/ProductCard.css";

export default function ProductCard({ title, price, image }) {
  const { isLoggedIn } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const handleCartClick = () => {
    if (!isLoggedIn) {
      alert("É necessário fazer login para adicionar ao carrinho!");
      setShowLogin(true);
    } else {
      console.log(`Produto ${title} adicionado ao carrinho!`);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{price}</p>
      <button className="cart-btn" onClick={handleCartClick}>
        <FaShoppingCart />
      </button>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}
