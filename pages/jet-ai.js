/* eslint-disable @next/next/no-img-element */
"use client";

import Layout from "../components/Layout/Layout";
import { useState } from "react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Olá! Como posso ajudar-te hoje?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    const botReply = {
      sender: "bot",
      text: "Obrigado pela tua mensagem! Sou um chatbot inteligente e estou aqui para ajudar 😊",
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  return (
    <Layout>
      <section className="pt-10 pb-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="box-chat rounded p-4 border border-gray-200 shadow-sm">
                <h2 className="text-brand-1 text-center mb-4">Jet AI</h2>

                <div className="chat-window mb-4" style={{ overflowY: "auto", height: "52vh" }}>
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`mb-3 d-flex ${
                        msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-3 ${
                          msg.sender === "user"
                            ? "bg-brand-1 text-white"
                            : "bg-light border text-dark"
                        }`}
                        style={{ maxWidth: "75%" }}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSend} className="d-flex gap-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Escreve a tua pergunta..."
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
    
        {/* Imagem de fundo no canto inferior atrás do formulário */}
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

        {/* Balão com animação ao lado direito do formulário */}
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
