import { useEffect, useState } from "react";
import api from "../api/api";

export default function BuyCoins() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/coins/packages").then(res => {
      setPackages(res.data);
    });
  }, []);

  const handleBuy = async (packageId) => {
    try {
      setLoading(true);

      const res = await api.post("/payments/initiate", {
        packageId
      });

      // backend returns redirect_url
      window.location.href = res.data.redirect_url;

    } catch (err) {
      alert("Payment failed to start");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Buy Coins</h2>

      {packages.map(pkg => (
        <div key={pkg.id} style={{ border: "1px solid #ccc", padding: 20, marginBottom: 10 }}>
          <h3>{pkg.name}</h3>
          <p>{pkg.coins} Coins</p>
          <p>KES {pkg.price_kes}</p>

          <button onClick={() => handleBuy(pkg.id)} disabled={loading}>
            {loading ? "Processing..." : "Pay with Pesapal"}
          </button>
        </div>
      ))}
    </div>
  );
          }
