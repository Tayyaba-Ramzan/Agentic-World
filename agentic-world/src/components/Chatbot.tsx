"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, Send, X, Rocket, BrainCircuit } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "🤖 Welcome to the Future, Tayyaba Ramzan! How can I assist you with AI, technology, or innovation today? 🚀", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const generateBotReply = (message: string) => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("hello") || lowerMsg.includes("hi"))
      return "👋 Hey there! Welcome to Agentic AI. How can I help you today? 🚀";
    if (lowerMsg.includes("hero"))
      return "🚀 The Hero Section showcases Agentic AI’s vision and mission.";
    if (lowerMsg.includes("explore"))
      return "🔍 The Explore section provides insights into AI models and real-world applications.";
    if (lowerMsg.includes("technology"))
      return "🛠️ Learn about cutting-edge AI frameworks powering Agentic AI in the Technology section.";
    if (lowerMsg.includes("pricing"))
      return "💰 Check out our flexible AI integration plans on the Pricing page.";
    if (lowerMsg.includes("contact"))
      return "📞 Need help? Visit the Contact page for support and inquiries.";
    if (lowerMsg.includes("who made this") || lowerMsg.includes("creator"))
      return "🌍 This platform was built by **Hooriya M. Fareed**, a passionate frontend developer and AI enthusiast.";
    if (lowerMsg.includes("tayyaba ramzan"))
      return "👩‍💻 Tayyaba Ramzan is a frontend developer dedicated to AI-driven innovation.";
    if (lowerMsg.includes("what is agentic ai"))
      return "🤖 **Agentic AI** is an advanced AI system designed for automation, insights, and AI-driven assistance.";
    if (lowerMsg.includes("how does agentic ai work"))
      return "⚙️ **Agentic AI** leverages deep learning and neural networks to provide intelligent solutions.";
    if (lowerMsg.includes("what can agentic ai do"))
      return "🚀 **Agentic AI** automates tasks, analyzes data, and enhances decision-making with AI-powered tools.";
    if (lowerMsg.includes("what is ai"))
      return "🧠 AI (**Artificial Intelligence**) enables machines to learn, reason, and make decisions like humans.";
    if (lowerMsg.includes("how does ai work"))
      return "⚡ AI uses **machine learning and neural networks** to analyze data and predict outcomes.";
    if (lowerMsg.includes("future of ai"))
      return "🚀 AI’s future includes **self-learning systems, automation, robotics, and groundbreaking innovations!**";

    return "🤖 I'm here to assist! Ask me anything about AI, Agentic AI, or Tayyaba Ramzan.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = { text: generateBotReply(input), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-5 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </motion.button>

      {isOpen && (
        <motion.div
          className="w-96 bg-gray-900/80 text-white shadow-xl rounded-2xl p-5 absolute bottom-20 right-0 border border-blue-500 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div ref={chatRef} className="h-72 overflow-y-auto space-y-3 p-3 scrollbar-hide">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-xl max-w-[80%] flex items-center gap-2 ${
                  msg.sender === "bot"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white self-start shadow-md"
                    : "bg-gray-800 self-end shadow-sm"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {msg.sender === "bot" && <BrainCircuit size={20} />}
                {msg.sender === "user" && <Rocket size={18} className="text-pink-400" />}
                <span className="text-sm">{msg.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              className="w-full p-3 bg-gray-800 rounded-lg text-white outline-none placeholder-gray-400 border border-gray-700 focus:border-blue-400 transition-all duration-300"
              placeholder="Ask me anything about AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <motion.button
              className="bg-blue-500 p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
            >
              <Send size={22} className="text-white" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
