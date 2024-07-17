import { Main, Sidebar } from "./components";
const App: React.FC = function () {
  return (
    <main className="w-full h-full flex items-start">
      <Sidebar />
      <Main />
    </main>
  );
};

export default App;
