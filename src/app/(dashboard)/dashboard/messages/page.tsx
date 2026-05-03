"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Msg = { id: number; from: "me" | "doc"; text: string; time: string };

const threads = [
  {
    id: "thompson",
    name: "Dr. Sarah Thompson",
    role: "Nutritionist",
    last: "Hello — let's schedule some tests.",
    unread: 2,
  },
  {
    id: "lewis",
    name: "Dr. Daniel Lewis",
    role: "Cardiologist",
    last: "Your latest ECG looks great.",
    unread: 0,
  },
  {
    id: "rivera",
    name: "Dr. Helena Rivera",
    role: "GP",
    last: "Reminder: physical next week.",
    unread: 0,
  },
];

export default function MessagesPage() {
  const [active, setActive] = React.useState(threads[0].id);
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState<Msg[]>([
    {
      id: 1,
      from: "me",
      text: "Hi Dr. Thompson, I’ve been experiencing chest pain recently. Should I be concerned?",
      time: "12:00 PM",
    },
    {
      id: 2,
      from: "doc",
      text: "Hello — let’s schedule some tests to determine the cause and ensure everything is okay.",
      time: "12:05 PM",
    },
  ]);

  function send() {
    if (!input.trim()) return;
    const t = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((m) => [
      ...m,
      { id: m.length + 1, from: "me", text: input, time: t },
    ]);
    setInput("");
  }

  const activeThread = threads.find((t) => t.id === active)!;

  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
      <aside className="rounded-3xl border border-border bg-card p-3">
        <ul className="space-y-1">
          {threads.map((t) => (
            <li key={t.id}>
              <button
                onClick={() => setActive(t.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-colors",
                  active === t.id ? "bg-secondary" : "hover:bg-secondary/60",
                )}
              >
                <span className="size-10 shrink-0 rounded-full bg-primary/15" />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-medium">{t.name}</span>
                    {t.unread > 0 ? (
                      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-medium text-primary-foreground">
                        {t.unread}
                      </span>
                    ) : null}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {t.last}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="flex flex-col rounded-3xl border border-border bg-card">
        <header className="flex items-center gap-3 border-b border-border p-4">
          <span className="size-10 rounded-full bg-primary/15" />
          <div>
            <p className="font-medium">{activeThread.name}</p>
            <p className="text-xs text-muted-foreground">{activeThread.role}</p>
          </div>
        </header>

        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "flex",
                m.from === "me" ? "justify-end" : "justify-start",
              )}
            >
              <div
                className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-2 text-sm",
                  m.from === "me"
                    ? "rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm bg-secondary text-secondary-foreground",
                )}
              >
                <p>{m.text}</p>
                <p
                  className={cn(
                    "mt-1 text-[10px]",
                    m.from === "me" ? "text-primary-foreground/70" : "text-muted-foreground",
                  )}
                >
                  {m.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="flex items-center gap-2 border-t border-border p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message…"
            className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-sm outline-none focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/30"
          />
          <Button size="lg" onClick={send}>
            <Send />
            Send
          </Button>
        </footer>
      </section>
    </div>
  );
}
