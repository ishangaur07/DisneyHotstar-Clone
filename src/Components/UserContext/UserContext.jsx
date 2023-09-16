// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase'; // Import your Firebase configuration

const UserContext = createContext();

export function useUser() { 
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  // Add a function to set the selected video in the context
  const setSelectedVideoFile = (file) => {
    setSelectedVideo(file);
    console.log("The context file",file);
  };
  return (
    <UserContext.Provider value={{ user, logout, selectedVideo, setSelectedVideoFile}}>
      {children}
    </UserContext.Provider>
  );
}
