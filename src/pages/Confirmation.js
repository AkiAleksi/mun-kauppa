import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Confirmation() {
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart(); // Tyhjennetään ostoskori, kun sivu ladataan
  }, [clearCart]);

  return (
    <div>
      <h1>Kiitos tilauksestasi!</h1>
      <p>Tilauksesi on vastaanotettu ja käsitellään pian.</p>
    </div>
  );
}

