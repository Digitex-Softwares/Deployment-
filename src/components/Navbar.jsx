import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar({ variant = "public" }) {
  const { isAuthed, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <div className="nav">
      <div className="nav-inner container">
        <Link className="brand" to={variant === "dashboard" ? "/dashboard" : "/"}>
          Digitex Deploy
        </Link>

        <div className="nav-links">
          {variant === "public" ? (
            <>
              <Link to="/login">Login</Link>
              <Link className="btn" to="/register">Get Started</Link>
            </>
          ) : (
            <>
              {isAuthed && <button className="btn" onClick={handleLogout}>Logout</button>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
