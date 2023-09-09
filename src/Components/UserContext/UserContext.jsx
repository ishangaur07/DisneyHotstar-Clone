// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase'; // Import your Firebase configuration

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut(); // Sign the user out using Firebase
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <UserContext.Provider value={{ user,logout }}>
      {children}
    </UserContext.Provider>
  );
}
