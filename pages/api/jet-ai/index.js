export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Mensagem em falta" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "És o Jet AI, assistente virtual da Jet Hire. A tua função é ajudar candidatos e empresas com temas relacionados com emprego, candidaturas, entrevistas, ofertas de trabalho ou funcionamento do site Jet Hire. Deves falar sempre em português de Portugal, de forma clara, simpática e informal. Se te fizerem perguntas fora destes temas, responde educadamente que não podes ajudar com esse assunto e que estás apenas disponível para ajudar em questões relacionadas com emprego ou com a plataforma Jet Hire.",
          },
          { role: "user", content: message },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    const botReply = data.choices?.[0]?.message?.content?.trim() || "Hmm... Esta deixou-me sem palavras.";

    return res.status(200).json({ reply: botReply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao comunicar com o ChatGPT" });
  }
}