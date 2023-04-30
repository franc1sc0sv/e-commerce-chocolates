import { createContext, useEffect, useState } from "react";
import { getUser } from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserData = async () => {
    setIsLoading(true);
    try {
      const data = await getUser();
      setUser(data);
    } catch ({ response }) {
      setError(response);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
