import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Home.css";

export default function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="home-container">
      <h1>Tuotteet</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>
              Lisää ostoskoriin
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


