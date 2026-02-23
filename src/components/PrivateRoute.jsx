import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";

export default function PrivateRoute({ children }) {
  const { isAuthed, loadingMe } = useAuth();

  if (loadingMe) return <LoadingSpinner />;
  if (!isAuthed) return <Navigate to="/login" replace />;

  return children;
}
