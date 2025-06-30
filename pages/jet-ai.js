/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function ChatbotPage() {
  const { data: session } = useSession();

  const router = useRouter();
  useEffect(() => {
    if (session === null) {
      router.push("/");
    }
  }, [session, router]);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      setIsTyping(true);

      const res = await fetch("/api/jet-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.trim() }),
      });

      const data = await res.json();

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch (err) {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Ocorreu um erro ao contactar a AI." },
      ]);
    }
  };

  return (
    <Layout>
      <section className="pt-10 pb-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="box-chat rounded p-4 border border-gray-200 shadow-sm">
                
                <div className="row justify-content-center">
                  <img style={{ height: "35px", marginBottom: "20px" }} src="assets/imgs/jet-ai/jet-ai.svg" />
                </div>
                
                <div className="chat-window mb-4" style={{ overflowY: "auto", height: "53vh" }}>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`mb-3 d-flex ${
                        msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                      }`}
                    >
                      <div className={`d-flex align-items-start ${msg.sender === "user" ? "flex-row-reverse" : ""}`} style={{ gap: "10px" }}>
                        <img
                          src={
                            msg.sender === "user"
                              ? session?.user?.image || "/imgs/default-user.png"
                              : "assets/imgs/jet-ai/jet-ai-logo.png"  
                          }
                          alt="avatar"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          className={`p-2 rounded-3 ${
                            msg.sender === "user"
                              ? "bg-brand-2 text-white"
                              : "bg-light border text-dark"
                          }`}
                          style={{ maxWidth: "100%" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="mb-3 d-flex justify-content-start">
                      <div className="d-flex align-items-start" style={{ gap: "10px" }}>
                        <img
                          src="assets/imgs/jet-ai/jet-ai-logo.png"
                          alt="Jet AI logo"
                          className="spinner"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          className="p-2 rounded-3 bg-light border text-muted fst-italic"
                          style={{ maxWidth: "100%" }}
                        >
                          Jet AI está a escrever...
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSend} className="d-flex gap-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Escreva a sua pergunta..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button className="btn btn-brand-1 hover-up" type="submit">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    
        <img
        src="assets/imgs/page/login-register/img-3.svg"
        alt="Fundo"
        style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            zIndex: -1,
            opacity: 0.8,
            pointerEvents: "none",
        }}
        />

        <img
        src="assets/imgs/page/login-register/img-4.svg"
        alt="Balão"
        style={{
            position: "fixed",
            top: "40%",
            right: 50,
            zIndex: 10,
            animation: "float 3s ease-in-out infinite",
        }}
        />
    </Layout>
  );
}
