import { Link } from "react-router-dom";

export default function PaymentFailed() {
  return (
    <div className="card">
      <h2>Payment Failed</h2>
      <p className="muted">Your payment didn’t complete. Please try again.</p>
      <Link className="btn" to="/buy-coins">Try Again</Link>
    </div>
  );
}
