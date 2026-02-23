import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [loadingMe, setLoadingMe] = useState(true);

  const isAuthed = !!token;

  useEffect(() => {
    const loadMe = async () => {
      try {
        if (!token) {
          setUser(null);
          return;
        }
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
      } finally {
        setLoadingMe(false);
      }
    };
    loadMe();
  }, [token]);

  const login = (jwtToken) => {
    localStorage.setItem("token", jwtToken);
    setToken(jwtToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthed, login, logout, loadingMe }}>
      {children}
    </AuthContext.Provider>
  );
}
