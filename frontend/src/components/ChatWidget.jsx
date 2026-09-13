import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, ExternalLink } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const WA_NUMBER = "6285119833362";
export const WA_DISPLAY = "+62 851-1983-3362";
export const WA_URL = (msg = "Halo, saya ingin bertanya tentang properti di Huniaja.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function makeSessionId() {
  const existing = localStorage.getItem("huniaja_chat_session");
  if (existing) return existing;
  const id = "sess_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
  localStorage.setItem("huniaja_chat_session", id);
  return id;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Halo! Saya Dea, admin Huniaja.com. Ada yang bisa saya bantu seputar properti, KPR Syariah, atau pasang iklan?",
    },
  ]);
  const scrollRef = useRef(null);
  const sessionIdRef = useRef(null);

  useEffect(() => {
    sessionIdRef.current = makeSessionId();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = async (msgOverride) => {
    const text = (msgOverride ?? input).trim();
    if (!text || loading) return;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/chat`, {
        session_id: sessionIdRef.current,
        message: text,
      });
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "..." },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Maaf, koneksi sedang bermasalah. Silakan hubungi kami via WhatsApp untuk respons cepat.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Cara pasang iklan gratis",
    "Simulasi KPR Syariah",
    "Cara ajukan kerjasama",
  ];

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          data-testid="chat-fab"
          className="fixed bottom-5 right-5 z-40 bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full shadow-2xl flex items-center gap-2 pl-4 pr-5 h-14 transition-transform hover:-translate-y-0.5"
          aria-label="Buka chat"
        >
          <span className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white ring-2 ring-[#00B512]" />
          </span>
          <span className="font-bold text-sm hidden sm:inline">Chat AI</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-5 right-5 z-40 w-[360px] max-w-[calc(100vw-24px)] max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
          {/* Header */}
          <div className="bg-[#0025F5] text-white px-5 py-4 flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00B512] ring-2 ring-[#0025F5]" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Dea - Admin Huniaja.com</p>
              <p className="text-[11px] text-white/80">Online sekarang</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-[#0025F5] text-white rounded-br-md"
                      : "bg-white text-slate-800 border border-slate-100 shadow-sm rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl px-3.5 py-2.5 text-sm text-slate-500 flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Dea sedang mengetik...
                </div>
              </div>
            )}
            {messages.length <= 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-xs bg-white border border-slate-200 hover:border-[#0025F5] hover:text-[#0025F5] text-slate-700 rounded-full px-3 py-1.5 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp handoff */}
          <a
            href={WA_URL()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="chat-wa-handoff"
            className="mx-4 mt-1 mb-2 bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full h-10 flex items-center justify-center gap-2 text-xs font-bold transition"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Chat WhatsApp
          </a>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ketik pertanyaan..."
              className="flex-1 min-w-0 rounded-full border border-slate-200 focus:border-[#0025F5] outline-none px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-full bg-[#0025F5] hover:bg-[#001fd1] disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center transition"
              aria-label="Kirim"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
