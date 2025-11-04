import React from "react";

interface PromptSuggestionsProps {
  onSelect: (text: string) => void;
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ onSelect }) => {
  const suggestions: string[] = [
    "Quels sont les filières disponibles ?",
    "Comment s'inscrire à l'université ?",
    "Quels sont les frais de scolarité ?",
    "Quels documents faut-il pour l’inscription ?",
  ];

  return (
    <div className="flex flex-wrap gap-2 p-3 pt-0">
      {suggestions.map((s, i) => (
        <button
          key={i}
          onClick={() => onSelect(s)}
          className="bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white
                     px-3 py-2 rounded-full text-xs hover:bg-gray-300
                     dark:hover:bg-zinc-600 transition"
        >
          {s}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions;
