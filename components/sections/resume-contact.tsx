"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ResumeContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setStatusText("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusText(data?.error || "Failed to send message.");
        return;
      }

      setStatus("success");
      setStatusText("Message sent successfully. I will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusText("Network error while sending message.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      <Card className="p-6 md:p-8">
        <h2 className="font-display text-2xl text-white">Contact</h2>
        <div className="mt-4 grid gap-3 text-sm text-white/80">
          <a href="mailto:sujithsm.dev@gmail.com" className="grid grid-cols-[24px_88px_1fr] items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-white/85" />
            <span className="text-white/55">Email</span>
            <span>sujithsm.dev@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/sujith-s-m" target="_blank" rel="noreferrer" className="grid grid-cols-[24px_88px_1fr] items-center gap-2 hover:text-white">
            <Linkedin className="h-4 w-4 text-white/85" />
            <span className="text-white/55">LinkedIn</span>
            <span>linkedin.com/in/sujith-s-m</span>
          </a>
          <a href="https://github.com/Sujith-SM" target="_blank" rel="noreferrer" className="grid grid-cols-[24px_88px_1fr] items-center gap-2 hover:text-white">
            <Github className="h-4 w-4 text-white/85" />
            <span className="text-white/55">GitHub</span>
            <span>github.com/Sujith-SM</span>
          </a>
          <p className="grid grid-cols-[24px_88px_1fr] items-center gap-2">
            <MapPin className="h-4 w-4 text-white/85" />
            <span className="text-white/55">Location</span>
            <span>Chennai, India</span>
          </p>
        </div>

        <form className="mt-6 space-y-3" onSubmit={onSubmit}>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" required />
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message" required />
          <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Send Message"}</Button>
          {status !== "idle" && (
            <p className={`text-sm ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : "text-white/70"}`}>
              {statusText}
            </p>
          )}
        </form>
      </Card>
    </section>
  );
}
