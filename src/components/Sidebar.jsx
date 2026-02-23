import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Digitex</div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/bots">Bots</NavLink>
        <NavLink to="/deployments">Deployments</NavLink>
        <NavLink to="/buy-coins">Buy Coins</NavLink>
      </nav>
    </aside>
  );
}
