export default function CoinCard({ pkg, onBuy }) {
  return (
    <div className="card">
      <h3>{pkg.name}</h3>
      <p className="muted">{pkg.coins} coins</p>
      <div className="row">
        <span className="badge">KES {pkg.price_kes}</span>
        <button className="btn" onClick={() => onBuy(pkg.id)}>Pay (Pesapal)</button>
      </div>
    </div>
  );
}
