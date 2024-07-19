import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ChatMain, Login, Register } from "./pages";
import { auth } from "./firebase";
import { User } from "firebase/auth";
const App: React.FC = function () {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <section>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route
          element={!user ? <Navigate to="/login" /> : <ChatMain />}
          path="chat"
        />
        <Route
          element={user ? <Navigate to="/chat" /> : <Login />}
          path="/login"
        />
        <Route
          element={user ? <Navigate to="/chat" /> : <Register />}
          path="/register"
        />
      </Routes>
    </section>
  );
};

export default App;
