interface ChatBubbleProps {
  message: string;
  status: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = function ({ message, status }) {
  return (
    <div
      className={`max-w-[80%] rounded-md w-fit p-3 ${
        status == "receive"
          ? "self-start bg-slate-400"
          : "self-end bg-green-300"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default ChatBubble;
