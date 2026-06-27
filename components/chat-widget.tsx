"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

type Message = {
  role: "agent" | "user";
  text: string;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "agent", text: siteContent.chat.welcome }
  ]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-portfolio-chat", openChat);
    return () => window.removeEventListener("open-portfolio-chat", openChat);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { role: "user", text },
      { role: "agent", text: siteContent.chat.fallback }
    ]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-[#D3D9D4]/20 bg-[#124E66]/90 px-4 py-3 text-sm font-medium text-[#D3D9D4] shadow-[0_0_32px_rgba(18,78,102,0.65)] backdrop-blur transition hover:bg-[#155f7b]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#D3D9D4]/12">
          <Bot className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline">{siteContent.chat.floatingLabel}</span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            className="fixed bottom-24 right-5 z-50 w-[min(390px,calc(100vw-40px))] overflow-hidden rounded-lg border border-[#D3D9D4]/18 bg-[#212A31]/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22 }}
          >
            <div className="flex items-center justify-between border-b border-[#D3D9D4]/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#124E66] text-[#D3D9D4]">
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#D3D9D4]">{siteContent.chat.title}</p>
                  <p className="font-mono text-[11px] text-[#748D92]">mock interface</p>
                </div>
              </div>
              <Button variant="ghost" className="h-9 w-9 px-0" onClick={() => setOpen(false)} aria-label="Close chat">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="max-h-80 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-md px-3 py-2 text-sm leading-6 ${
                    message.role === "user"
                      ? "ml-auto max-w-[82%] bg-[#124E66] text-[#D3D9D4]"
                      : "mr-auto max-w-[88%] bg-[#2E3944] text-[#D3D9D4]"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[#D3D9D4]/10 p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={siteContent.chat.placeholder}
                className="h-11 min-w-0 flex-1 rounded-md border border-[#D3D9D4]/12 bg-[#1b242b] px-3 text-sm text-[#D3D9D4] outline-none transition placeholder:text-[#748D92] focus:border-[#748D92]"
              />
              <Button type="submit" className="h-11 w-11 px-0" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
