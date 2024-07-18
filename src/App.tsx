import { Route, Routes } from "react-router-dom";
import { HomePage, ChatMain, Login, Register } from "./pages";
const App: React.FC = function () {
  return (
    <section>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ChatMain />} path="chat" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </section>
  );
};

export default App;
