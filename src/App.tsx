import { Route, Routes } from "react-router-dom";
import ChatMain from "./pages/chat/ChatMain";
import HomePage from "./pages/home/Home";
const App: React.FC = function () {
  return (
    <section>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ChatMain />} path="chat" />
      </Routes>
    </section>
  );
};

export default App;
