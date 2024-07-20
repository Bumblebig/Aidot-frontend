import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, ChatMain, Login, Register } from "./pages";
import { MobileBar } from "./components";
import { SharedBarStateProvider } from "./context/SharedBarState";
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
    <section className="relative h-screen">
      <SharedBarStateProvider>
        <MobileBar />
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
      </SharedBarStateProvider>
    </section>
  );
};

export default App;
