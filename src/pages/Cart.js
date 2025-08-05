import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Lasketaan kokonaissumma
  const total = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Ostoskori</h1>

      {cart.length === 0 ? (
        <p>Ostoskorisi on tyhjä.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((product, index) => (
              <li key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
                <img src={product.image} alt={product.name} width="100" />
                <h3>{product.name}</h3>
                <p>Hinta: {product.price.toFixed(2)} €</p>
                <button onClick={() => removeFromCart(index)}>Poista</button>
              </li>
            ))}
          </ul>

          <h2>Yhteensä: {total} €</h2>

          <Link to="/checkout">
            <button style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
              Siirry kassalle
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

