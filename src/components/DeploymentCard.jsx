import { Link } from "react-router-dom";

export default function DeploymentCard({ d }) {
  return (
    <div className="card">
      <h3>{d.app_name}</h3>
      <p className="muted">Status: {d.status}</p>
      <div className="row">
        <Link className="btn" to={`/deployments/${d.id}`}>View</Link>
        <Link className="btn btn-ghost" to={`/manage/${d.id}`}>Manage</Link>
      </div>
    </div>
  );
}
