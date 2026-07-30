'use client';
import { useState } from 'react';

export default function ShivuAI() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Yo! Main Shivu AI hoon. Mujhe Kimi AI ki tarah code likhne, game banane, aur debug karne ke liye banaya gaya hai. Batao aaj kya build karna hai?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let aiReply = "Bhai, tera code/game logic samajh gaya hoon. Isko implement karne ke liye yeh structure use karenge:";
      if (userMsg.toLowerCase().includes('game') || userMsg.toLowerCase().includes('coding')) {
        aiReply = "🔥 Game Development / Coding Mode Activated! Yeh le tera clean code snippet:\n\n```tsx\n// Shivu AI Generated Code\nexport default function GameCanvas() {\n  return <div className='bg-black text-green-400 p-4'>Game Engine Running...</div>;\n}\n```";
      } else {
        aiReply = `Tune pucha: "${userMsg}". Shivu AI isko process karke next update mein aur advanced kar raha hai!`;
      }
      setMessages(prev => [...prev, { role: 'ai', text: aiReply }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0f1117] text-white font-sans flex flex-col justify-between">
      
      {/* Top Navbar */}
      <header className="bg-[#161b22] border-b border-zinc-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="bg-purple-600 text-white font-black px-2.5 py-1 rounded-lg text-xs shadow-lg">⚡ AI</span>
          <h1 className="text-lg font-black tracking-wider text-purple-400">SHIVU AI <span className="text-xs text-zinc-400 font-normal">PRO v1.0</span></h1>
        </div>
        <div className="flex gap-2 text-xs font-bold">
          <span className="bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded border border-zinc-700">Coding Mode</span>
          <span className="bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded border border-zinc-700">Game Engine</span>
        </div>
      </header>

      {/* Chat Conversation Area */}
      <div className="max-w-4xl w-full mx-auto px-4 py-6 flex-grow flex flex-col gap-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-md ${
              msg.role === 'user' 
                ? 'bg-purple-600 text-white rounded-br-none font-medium' 
                : 'bg-[#1f242d] border border-zinc-700 text-zinc-200 rounded-bl-none whitespace-pre-wrap font-mono'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#1f242d] border border-zinc-700 text-zinc-400 p-3 rounded-2xl text-xs animate-pulse">
              Shivu AI is writing code & building logic...
            </div>
          </div>
        )}
      </div>

      {/* Bottom Input Box */}
      <div className="bg-[#161b22] border-t border-zinc-800 p-4 sticky bottom-0">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Shivu AI to write code, build games, or explain logic..." 
            className="flex-grow bg-[#0d1117] border border-zinc-700 text-xs sm:text-sm px-4 py-3 rounded-xl text-white focus:outline-none focus:border-purple-500 shadow-inner"
          />
          <button 
            onClick={handleSend}
            className="bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-lg cursor-pointer"
          >
            Send 🚀
          </button>
        </div>
      </div>

    </div>
  );
      }

