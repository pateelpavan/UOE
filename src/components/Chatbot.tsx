import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { chatbotDatabase, defaultChatbotResponse } from "../data/newsData";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm UOE Bot, your education news assistant. Ask me anything about admissions, scholarships, policies, and more!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (question: string): string => {
    const lowercaseQuestion = question.toLowerCase();

    for (const qa of chatbotDatabase) {
      if (qa.keywords.some((keyword) => lowercaseQuestion.includes(keyword))) {
        return qa.answer;
      }
    }

    return defaultChatbotResponse;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot thinking and response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-purple-200 dark:border-purple-700 overflow-hidden transition-colors duration-300">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-800 dark:via-purple-800 dark:to-pink-700 text-white p-6 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="bg-white rounded-full p-3"
          >
            <Bot className="size-8 text-purple-600" />
          </motion.div>
          <div>
            <h2 className="text-2xl">UOE Bot</h2>
            <p className="text-sm text-blue-100">
              Ask me anything about education
            </p>
          </div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="ml-auto"
          >
            <Sparkles className="size-6 text-yellow-300" />
          </motion.div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`flex-shrink-0 size-10 rounded-full flex items-center justify-center ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-blue-500 to-purple-500"
                    : "bg-gradient-to-br from-pink-500 to-orange-500"
                }`}
              >
                {message.sender === "user" ? (
                  <User className="size-5 text-white" />
                ) : (
                  <Bot className="size-5 text-white" />
                )}
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`max-w-[70%] p-4 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-md border border-purple-100 dark:border-purple-700"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
                <p
                  className={`text-xs mt-2 ${
                    message.sender === "user"
                      ? "text-blue-100"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-gray-800 border-t-2 border-purple-200 dark:border-purple-700 transition-colors duration-300">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            className="flex-1 px-4 py-3 border-2 border-purple-300 dark:border-purple-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow flex items-center gap-2"
          >
            <Send className="size-5" />
            <span>Send</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}