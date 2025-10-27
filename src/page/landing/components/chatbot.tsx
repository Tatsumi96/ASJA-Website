import React, { useState, useCallback, useRef, useEffect } from "react";
import { Bot, CircleX, Send } from "lucide-react";

const CLE_API_GEMINI = "API_GEMINI";
const URL_API_GEMINI =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

interface Message {
  texte: string;
  expediteur: "utilisateur" | "bot";
}

const PROMPT_D_ORIGINE =
  "Vous êtes l'assistant virtuel officiel du site web universitaire. Votre rôle est de fournir des informations précises sur les admissions, les programmes d'études, les dates importantes, la vie sur le campus et les services étudiants. Adoptez un ton formel, clair et serviable. Répondez uniquement en français.";

const Chatbot: React.FC = () => {
  const [isopen, setEstOuvert] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [saisie, setSaisie] = useState("");
  const [estEnChargement, setEstEnChargement] = useState(false);

  const refFinMessages = useRef<HTMLDivElement>(null);
  const defilerJusquEnBas = () => {
    refFinMessages.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(defilerJusquEnBas, [messages]);

  const recupererReponseGemini = useCallback(
    async (messageUtilisateur: string) => {
      if (!CLE_API_GEMINI || !URL_API_GEMINI) {
        setMessages((prev) => [
          ...prev,
          { texte: "Erreur: Clé API manquante.", expediteur: "bot" },
        ]);
        return;
      }

      setEstEnChargement(true);

      const contenu = [
        {
          role: "user",
          parts: [{ text: messageUtilisateur }],
        },
      ];

      try {
        const reponse = await fetch(`${URL_API_GEMINI}?key=${CLE_API_GEMINI}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: contenu,
            config: {
              systemInstruction: PROMPT_D_ORIGINE,
            },
          }),
        });

        if (!reponse.ok) {
          throw new Error(`Erreur HTTP! statut: ${reponse.status}`);
        }

        const donnees = await reponse.json();
        const texteBot =
          donnees.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Désolé, je n'ai pas pu générer de réponse.";

        setMessages((prev) => [
          ...prev,
          { texte: texteBot, expediteur: "bot" },
        ]);
      } catch (error) {
        console.error("Erreur Gemini:", error);
        setMessages((prev) => [
          ...prev,
          { texte: "Une erreur de connexion est survenue.", expediteur: "bot" },
        ]);
      } finally {
        setEstEnChargement(false);
      }
    },
    []
  );

  const gererEnvoi = (e: React.FormEvent) => {
    e.preventDefault();
    const saisieTronquee = saisie.trim();
    if (!saisieTronquee) return;

    setMessages((prev) => [
      ...prev,
      { texte: saisieTronquee, expediteur: "utilisateur" },
    ]);

    setSaisie("");

    recupererReponseGemini(saisieTronquee);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[1000] font-sans">
      <button
        onClick={() => setEstOuvert(!isopen)}
        className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full shadow-lg transition-all cursor-pointer duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        {isopen ? (
          <CircleX size={30} className="m-2" />
        ) : (
          <div className="flex items-center px-5 py-3">
            <Bot className="pb-2" size={35} />
            <span className="text-md">ASJABot</span>
          </div>
        )}
      </button>

      {isopen && (
        <div
          className="w-80 h-[400px] sm:w-96 sm:h-[500px] dark:bg-zinc-800 bg-white rounded-xl shadow-2xl flex flex-col mb-4 overflow-hidden"
          style={{ transform: "translateY(-10px)" }}
        >
          <div className="flex dark:text-white text-gray-800 shadow-md items-center px-5 py-3">
            <Bot className="pb-2" size={35} />
            <span className="text-md">ASJABot</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-3">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500 pt-5 text-sm italic">
                Bienvenue ! Je suis l'assistant de l'université. Posez-moi vos
                questions sur les inscriptions, les programmes ou la vie sur le
                campus.
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] p-3 rounded-xl text-sm break-words ${
                    msg.expediteur === "utilisateur"
                      ? "bg-green-700 text-white self-end rounded-br-md"
                      : "bg-gray-100 text-gray-800 dark:text-gray-300  dark:bg-zinc-700 self-start rounded-tl-md"
                  }`}
                >
                  {msg.texte}
                </div>
              ))
            )}
            {estEnChargement && (
              <div className="bg-gray-100 dark:bg-zinc-700 text-gray-500 p-3 rounded-xl self-start text-sm animate-pulse">
                ... L'assistant est en train de consulter les archives de
                l'université...
              </div>
            )}
            <div ref={refFinMessages} />
          </div>
          <form
            onSubmit={gererEnvoi}
            className="flex p-3 border-t border-gray-200"
          >
            <input
              type="text"
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              placeholder="Écrire votre question..."
              disabled={estEnChargement}
              className="flex-1 p-2 border text-gray-800 border-gray-300 dark:text-white rounded-l-lg focus:outline-none disabled:bg-gray-50"
            />
            <button
              type="submit"
              disabled={estEnChargement || !saisie.trim()}
              className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
