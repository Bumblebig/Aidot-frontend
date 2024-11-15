interface ChatBubbleProps {
  message: React.ReactNode;
  status: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = function ({ message, status }) {
  return (
    <div
      className={`max-w-[80%] rounded-md w-fit p-3 lg:max-w-[70%] xl:max-w-[60%] ${
        status == "receive"
          ? "self-start bg-neutral-500 text-white"
          : "self-end bg-gray-200"
      }`}
    >
      <div className="leading-relaxed">{message}</div>
    </div>
  );
};

export default ChatBubble;
