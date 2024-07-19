import { useState } from "react";
import axios from "axios";
import { auth, db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const Prompt: React.FC = function () {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) {
      if (!loading) {
        setLoading(true);
        try {
          const response = await axios.post(
            "https://aidot.onrender.com/api/chatbot",
            { message: input }
          );
          const botResponse = response.data.response;
          let checkResponse: string = "";
          if (botResponse != "") checkResponse = botResponse;
          else checkResponse = "An error occured, please try again";

          const user = auth.currentUser;
          if (user) {
            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "send",
              content: input,
              timestamp: serverTimestamp(),
            });

            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "receive",
              content: checkResponse,
              timestamp: serverTimestamp(),
            });
          }

          setInput("");
        } catch (error) {
          console.error("Error sending message:", error);
          const user = auth.currentUser;
          if (user) {
            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "send",
              content: input,
              timestamp: serverTimestamp(),
            });

            await addDoc(collection(db, "Messages"), {
              userID: user.uid,
              status: "receive",
              content: "Internal error, Please try again",
              timestamp: serverTimestamp(),
            });
          }
        } finally {
          setLoading(false);
        }
      } else {
        console.log("Please wait...");
      }
    }
  };
  return (
    <form
      className="w-full absolute bottom-0 left-0 flex justify-between px-3 py-4"
      onSubmit={handleSend}
    >
      <input
        className="w-[85%] border border-black px-4 py-1 lg:w-[90%]"
        placeholder="Enter prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="submit"
        value="Send"
        className={`border border-black p-2 ${
          loading
            ? "cursor-not-allowed opacity-50 bg-gray-300"
            : "cursor-pointer"
        }`}
      />
    </form>
  );
};

export default Prompt;
