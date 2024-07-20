import { Main, Sidebar } from "../../components";
const ChatMain: React.FC = function () {
  return (
    <main className="w-full h-screen flex items-start">
      <Sidebar />
      <Main />
    </main>
  );
};

export default ChatMain;
