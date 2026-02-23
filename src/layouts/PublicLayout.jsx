import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PublicLayout() {
  return (
    <div className="min-h">
      <Navbar variant="public" />
      <div className="container">
        <Outlet />
      </div>
      <footer className="footer">© {new Date().getFullYear()} Digitex Deploy</footer>
    </div>
  );
}
