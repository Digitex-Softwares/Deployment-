import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
  return (
    <div className="dash">
      <Sidebar />
      <div className="dash-main">
        <Navbar variant="dashboard" />
        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
