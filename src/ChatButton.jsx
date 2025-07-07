import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import faqData from './faqData';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 5) return "🌌 Burning the midnight oil?";
  if (hour < 12) return '🌅 Good morning!';
  if (hour < 18) return '🌞 Good afternoon!';
  return '🌙 Good evening!';
};

const getIntroMessage = () => {
  return `${getGreeting()}

Welcome to *Curry & Hops*! 🍛🍻  
I'm your friendly digital server — here to help you explore our restaurant, menu, and more!

💡 You can ask me things like:
• “What’s today’s special?”  
• “Do you offer Jain or vegan options?”  
• “Can I reserve a table for tonight?”  
• “Where exactly are you located?”

Tap the button below to start chatting with me! 👇`;
};

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showBot, setShowBot] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showTooltip, setShowTooltip] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    setMessages([{ from: 'bot', text: getIntroMessage() }]);

    // Tooltip logic
    const showFirstTimeTooltip = () => {
      if (!localStorage.getItem('curryHopsTooltipShown')) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
        localStorage.setItem('curryHopsTooltipShown', 'true');
      }
    };

    showFirstTimeTooltip();
  }, []);

  useEffect(() => {
    if (showBot) {
      setShowTooltip(false); // Hide tooltip on chat open
    }
  }, [showBot]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const lower = input.toLowerCase();
    const matched = faqData
      .filter((q) => q.question.toLowerCase().includes(lower))
      .slice(0, 4);
    setSuggestions(input.trim() ? matched : []);
  }, [input]);

  const handleSend = (question) => {
    const query = question || input;
    if (!query.trim()) return;

    const isOnline = navigator.onLine;
    setMessages((prev) => [...prev, { from: 'user', text: query }]);
    setInput('');
    setSuggestions([]);
    playSendSound();

    const userText = query.toLowerCase().trim();

    const casualResponses = {
      hi: "Hey there! 👋 Welcome to Curry & Hops!",
      hello: "Hello hello! 🍛 What can I help you with today?",
      'how are you': "Doing great and ready to serve! 😄 You?",
      'how are you doing': "Spicy and satisfied 😋",
      thanks: "You're always welcome! 🙏 Enjoy your time with us.",
      thankyou: "Of course! Let me know if you need anything else!",
      bye: "Goodbye! Hope to see you at Curry & Hops soon! 👋",
      'see you': "See you next time! 🍻",
    };

    const casualMatch = Object.keys(casualResponses).find((key) =>
      userText.includes(key)
    );

    const matched = faqData.find((item) =>
      item.question.toLowerCase().includes(userText)
    );

    const botReply = !isOnline
      ? "📴 You're offline! Please reconnect to get answers."
      : casualMatch
      ? casualResponses[casualMatch]
      : matched
      ? `🧠 *"${matched.question}"*\n\n${matched.answer}`
      : "🤔 I couldn’t find anything matching that. Try asking differently or explore our menu!";

    const followUps = matched?.followUps || [];

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: botReply, followUps }]);
    }, 700);
  };

  const playSendSound = () => {
    const snd = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_a84f5c915f.mp3');
    snd.volume = 0.25;
    snd.play();
  };

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-white text-black text-xs px-3 py-2 rounded-md shadow-lg relative animate-bounce transition">
            Tap here to chat with us!
            <div className="absolute right-2 -bottom-2 w-3 h-3 bg-white rotate-45 transform origin-center shadow-sm" />
          </div>
        )}

        <button
          onClick={() => setShowBot((s) => !s)}
          className="bg-gradient-to-tr from-yellow-400 to-orange-500 text-darkBlue rounded-full w-14 h-14 shadow-2xl flex items-center justify-center hover:scale-105 transition-all"
        >
          💬
        </button>
      </div>

      <AnimatePresence>
        {showBot && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className={`fixed bottom-24 right-5 w-[90vw] max-w-sm rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#0c101a] to-[#141f33] border-white/10'
                : 'bg-gradient-to-br from-white to-yellow-50 border-black/10'
            }`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 font-semibold tracking-wide bg-burntYellow/20 backdrop-blur">
              <span>🥘 Curry & Hops Bot</span>
              <button onClick={toggleTheme}>
                {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
              </button>
            </div>

            <div className="flex-1 px-4 py-3 overflow-y-auto max-h-[60vh] scroll-smooth">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`my-2 max-w-[90%] px-4 py-2 text-sm rounded-xl shadow ${
                    m.from === 'bot'
                      ? theme === 'dark'
                        ? 'bg-white/5 text-white self-start'
                        : 'bg-yellow-100 text-black self-start'
                      : 'bg-burntYellow text-darkBlue self-end'
                  } whitespace-pre-wrap`}
                >
                  {m.text.length > 300 ? (
                    <details>
                      <summary className="cursor-pointer">Tap to expand 💬</summary>
                      {m.text}
                    </details>
                  ) : (
                    m.text
                  )}
                  {m.followUps?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.followUps.map((f, j) => (
                        <button
                          key={j}
                          onClick={() => handleSend(f)}
                          className="bg-white/10 hover:bg-white/20 border border-white/10 text-xs px-3 py-1 rounded-full transition"
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="text-xs text-white/70 mt-2 italic animate-pulse">
                  Curry & Hops Bot is typing...
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-white/10 p-3 bg-white/5">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className={`flex-1 px-4 py-2 text-sm rounded-full focus:outline-none placeholder:text-white/50 transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 text-white'
                      : 'bg-gray-100 text-black placeholder:text-black/50'
                  }`}
                  placeholder="Type your question..."
                />
                <button
                  onClick={() => handleSend()}
                  className="p-2 rounded-full bg-burntYellow text-darkBlue hover:scale-110 transition"
                >
                  <FiSend />
                </button>
              </div>

              {suggestions.length > 0 && (
                <div className="mt-2 text-xs text-white/70">
                  Try:
                  <div className="flex flex-wrap gap-2 mt-1">
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(s.question)}
                        className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full border border-white/10 transition"
                      >
                        {s.question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
