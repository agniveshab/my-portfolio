"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { AI_RESPONSES } from "@/lib/constants";

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export function AIAssistantSection() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "ai", text: AI_RESPONSES.hello }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMsg: Message = { id: Date.now().toString(), sender: "user", text: userText };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let responseKey = "default";
      
      if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("know")) {
        responseKey = "skills";
      } else if (lowerInput.includes("project") || lowerInput.includes("built") || lowerInput.includes("work")) {
        responseKey = "projects";
      } else if (lowerInput.includes("experience") || lowerInput.includes("intern") || lowerInput.includes("job")) {
        responseKey = "experience";
      } else if (lowerInput.includes("education") || lowerInput.includes("college") || lowerInput.includes("study")) {
        responseKey = "education";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach")) {
        responseKey = "contact";
      } else if (lowerInput.includes("ai") || lowerInput.includes("artificial intelligence")) {
        responseKey = "ai";
      } else if (lowerInput.includes("who") || lowerInput.includes("about")) {
        responseKey = "who";
      }

      setMessages(prev => [
        ...prev, 
        { id: (Date.now() + 1).toString(), sender: "ai", text: AI_RESPONSES[responseKey] }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="ai-assistant" className="py-32 relative section-wrapper">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Orb & Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="section-label mb-4">06. // Interactive</span>
            <h2 className="section-title mb-6">
              Ask My <span className="gradient-text">AI Agent</span>
            </h2>
            <p className="text-white/60 text-lg max-w-lg mb-12">
              Curious about my background, skills, or projects? Ask the AI assistant directly. It's trained on my portfolio data and ready to answer your questions.
            </p>
            
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-electric/20 blur-3xl rounded-full"></div>
              <div className="ai-orb"></div>
            </div>
          </div>

          {/* Right Side: Chat Widget */}
          <div className="w-full lg:w-1/2">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col h-[500px]">
              
              {/* Chat Header */}
              <div className="bg-black/40 border-b border-white/5 p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-electric/20 border border-blue-electric/50 flex items-center justify-center text-blue-electric">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">Agnivesh Assistant</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-white/50 font-mono">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {msg.sender === "ai" && <Bot size={14} className="text-blue-electric" />}
                      <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
                        {msg.sender === "user" ? "You" : "Agent"}
                      </span>
                      {msg.sender === "user" && <User size={14} className="text-purple-neon" />}
                    </div>
                    <div className={msg.sender === "user" ? "chat-bubble-user" : "chat-bubble-ai"}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Bot size={14} className="text-blue-electric" />
                      <span className="text-xs text-white/40 uppercase tracking-wider font-mono">Agent</span>
                    </div>
                    <div className="chat-bubble-ai flex gap-1 items-center px-4 py-3">
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-black/40 border-t border-white/5">
                <form onSubmit={handleSend} className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-6 pr-12 text-sm text-white focus:outline-none focus:border-blue-electric/50 transition-colors placeholder:text-white/30 font-mono"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute right-2 w-8 h-8 rounded-full bg-blue-electric/20 text-blue-electric flex items-center justify-center hover:bg-blue-electric hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={14} />
                  </button>
                </form>
                <div className="text-center mt-2">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">Powered by Local Simulation Rules</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
