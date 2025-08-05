import { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [formData, setFormData] = useState({
    email: "",
    address: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.address) {
      alert("Täytä kaikki kentät!");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
        <h2>Kiitos tilauksestasi!</h2>
        <p>Olemme vastaanottaneet yhteystietosi:</p>
        <p><strong>Sähköposti:</strong> {formData.email}</p>
        <p><strong>Osoite:</strong> {formData.address}</p>
        <Link to="/" style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#1890ff",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Palaa etusivulle
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1>Anna yhteystietosi</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>
          Sähköposti:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
        </label>

        <label>
          Osoite:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows={4}
            style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#1890ff",
            color: "white",
            padding: "0.75rem",
            border: "none",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Lähetä tilaus
        </button>
      </form>
    </div>
  );
}


