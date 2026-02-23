import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="card">
        <h1>Deploy Bots to Heroku in 1 Click</h1>
        <p className="muted">
          Buy coins, choose a bot, set ENV variables, deploy, and manage everything from one dashboard.
        </p>
        <div className="row">
          <Link className="btn" to="/register">Get Started</Link>
          <Link className="btn btn-ghost" to="/login">Login</Link>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="grid">
        <div className="card">
          <h3>Coin System</h3>
          <p className="muted">Pay per deployment. No confusion, full control.</p>
        </div>
        <div className="card">
          <h3>Live Status + Logs</h3>
          <p className="muted">Track builds and view logs from your dashboard.</p>
        </div>
        <div className="card">
          <h3>Manage Bots</h3>
          <p className="muted">Restart, delete, and later scale dynos.</p>
        </div>
      </div>
    </div>
  );
}
