import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { ChatBubble } from ".";

interface GlobalMessage {
  status: string;
  content: string;
}

const Main: React.FC = function () {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [global, setGlobal] = useState<GlobalMessage[]>([]);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
  }

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      console.log("clicked");
      if (!loading) {
        setLoading(true);
        try {
          const response = await axios.post(
            "https://aidot.onrender.com/api/chatbot",
            { message: input }
          );
          console.log(response);
          const botResponse = response.data.response;
          setGlobal((prevGlobal) => [
            ...prevGlobal,
            {
              status: "send",
              content: input,
            },
            {
              status: "receive",
              content: botResponse,
            },
          ]);
          setInput("");
        } catch (error) {
          console.error("Error sending message:", error);
          setGlobal((prevGlobal) => [
            ...prevGlobal,
            {
              status: "send",
              content: input,
            },
            {
              status: "receive",
              content: "An error occurred. Please try again.",
            },
          ]);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Please wait...");
      }
    }
  };

  console.log(global);

  return (
    <section className="bg-white h-screen w-full overflow-hidden pt-14 pb-24">
      <div className="w-full p-4 fixed top-0 left-0 shadow-lg cursor-pointer">
        Menu
      </div>
      <div className="overflow-y-auto h-full p-4 flex flex-col gap-3 md:gap-4">
        {global.map((item, index) => {
          if (item.content !== "") {
            return (
              <ChatBubble
                key={index}
                status={item.status}
                message={<ReactMarkdown>{item.content}</ReactMarkdown>}
              />
            );
          } else {
            return (
              <ChatBubble
                key={index}
                message="An error occurred, Try again"
                status={item.status}
              />
            );
          }
        })}
      </div>
      <form
        className="w-full fixed bottom-0 left-0 flex justify-between px-3 py-4"
        onSubmit={handleSend}
      >
        <textarea
          className="w-4/5 border border-black px-4 py-1"
          placeholder="Enter prompt..."
          value={input}
          onChange={handleInput}
        ></textarea>
        <input
          type="submit"
          value="Send"
          className={`border border-black p-2 ${
            loading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        />
      </form>
    </section>
  );
};

export default Main;
