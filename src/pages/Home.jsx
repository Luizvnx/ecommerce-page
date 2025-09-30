import "../styles/Home.css";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {

  const location = useLocation();

  const produtos = [  
    { id: 1, title: "Jaqueta Slim", price: "R$ 249,00", image: "/jaqueta.webp" },
    { id: 2, title: "Vestido Floral", price: "R$ 179,00", image: "/jaqueta.webp" },
    { id: 3, title: "Camiseta Básica", price: "R$ 59,00", image: "/jaqueta.webp" },
    { id: 4, title: "Calça Jeans", price: "R$ 199,00", image: "/jaqueta.webp" },
    { id: 5, title: "Jaqueta Slim", price: "R$ 249,00", image: "/jaqueta.webp" },
    { id: 6, title: "Vestido Floral", price: "R$ 179,00", image: "/jaqueta.webp" },
    { id: 7, title: "Camiseta Básica", price: "R$ 59,00", image: "/jaqueta.webp" },
    { id: 8, title: "Calça Jeans", price: "R$ 199,00", image: "/jaqueta.webp" },
    { id: 9, title: "Jaqueta Slim", price: "R$ 249,00", image: "/jaqueta.webp" },
    { id: 10, title: "Vestido Floral", price: "R$ 179,00", image: "/jaqueta.webp" },
    { id: 11, title: "Camiseta Básica", price: "R$ 59,00", image: "/jaqueta.webp" },
    { id: 12, title: "Calça Jeans", price: "R$ 199,00", image: "/jaqueta.webp" },
  ];

  useEffect(() => {
    if (location.state?.scrollToProducts) {
      const section = document.getElementById("products");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  
  return (
    <>
      <header className="hero-section">
        <div className="hero-inner">

          <div className="hero-content">
            <h1>Para você vestir com estilo</h1>
            <p>As melhores roupas com conforto e qualidade — direto para o seu guarda-roupa.</p>
          </div>

          <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
            <select className="seg seg-left" aria-label="Tipo">
              <option>Todos</option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>

            <select className="seg" aria-label="Categoria">
              <option>Categoria</option>
              <option>Jaquetas</option>
              <option>Vestidos</option>
              <option>Camisetas</option>
            </select>

            <input className="seg seg-input" placeholder="Digite: jaqueta, vestido..." />

            <button className="seg seg-btn" type="submit">Buscar</button>
          </form>
        </div>
      </header>

      <section className="products-section" id="products">
      <div className="container">
        <h2>Os mais vendidos</h2>
        <div className="product-grid">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              title={produto.title}
              price={produto.price}
              image={produto.image}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
