import { Link } from "react-router-dom";

export default function BotCard({ bot }) {
  return (
    <div className="card">
      <h3>{bot.name}</h3>
      <p className="muted">{bot.description || "No description"}</p>
      <div className="row">
        <span className="badge">{bot.coins_required} coins</span>
        <Link className="btn" to={`/bots/${bot.slug}`}>Deploy</Link>
      </div>
    </div>
  );
}
