interface ChatBubbleProps {
  message: any;
  status: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = function ({ message, status }) {
  return (
    <div
      className={`max-w-[80%] rounded-md w-fit p-3 lg:max-w-[70%] xl:max-w-[60%] ${
        status == "receive" ? "self-start bg-blue-200" : "self-end bg-gray-200"
      }`}
    >
      <div className="leading-relaxed">{message}</div>
    </div>
  );
};

export default ChatBubble;
