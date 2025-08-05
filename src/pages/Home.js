import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useContext(CartContext);  // <-- TÄMÄ PUUTTUU

  return (
    <div>
    <h1>Tervetuloa mun kauppaan</h1>
      <h1>Tuotteet</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
          </div>
        ))}
      </div>
    </div>
  );
}
