"use client";

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface AuthContextType {
  token: string | null;
  loading: boolean;
  login: (newToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("_token="))
      ?.split("=")[1];

    if (cookieToken) {
      setToken(cookieToken);
    } else if (sessionToken) {
      setToken(sessionToken);
    }

    setLoading(false);
  }, []);

  const login = (newToken: string) => {
    document.cookie = `_token=${newToken}; path=/; SameSite=Strict`;
    sessionStorage.setItem("token", newToken);
    setToken(newToken);
    setLoading(false);
  };

  const logout = () => {
    document.cookie = `_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    sessionStorage.removeItem("token");
    setToken(null);
    setLoading(false);
  };

  const value: AuthContextType = {
    token,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

// Custom hook for easier context consumption
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
