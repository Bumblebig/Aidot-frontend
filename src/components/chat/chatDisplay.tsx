import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { auth, db } from "../../firebase";
import {
  collection,
  query,
  onSnapshot,
  where,
  orderBy,
} from "firebase/firestore";
import { ChatBubble } from "..";

interface Message {
  status: string;
  content: string;
  timestamp: unknown;
}
const ChatDisplay: React.FC = function () {
  const [global, setGlobal] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "Messages"),
          where("userID", "==", user.uid),
          orderBy("timestamp")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const messages = snapshot.docs.map((doc) => ({
            status: doc.data().status,
            content: doc.data().content,
            timestamp: doc.data().timestamp,
          }));
          setGlobal(messages);
        });
        return () => unsubscribe();
      }
    };
    fetchMessages();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [global]);

  console.log(global);
  return (
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
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatDisplay;
