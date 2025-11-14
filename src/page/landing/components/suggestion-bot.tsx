import React from "react";

interface PromptSuggestionsProps {
  onSelect: (text: string) => void;
}

const PromptSuggestions: React.FC<PromptSuggestionsProps> = ({ onSelect }) => {
  const suggestions: string[] = [
    "Quels sont les frais de scolarité ?",
    "Quels documents faut-il pour l'inscription ?",
    "Comment contacter le service de la scolarité ?",
  ];

  return (
    <div className="p-3 pt-2">
      <h4 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-3">
        Suggestions
      </h4>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((s, i) => (
          <button
            key={i}
            onClick={() => onSelect(s)}
            className="text-gray-700 dark:text-white cursor-pointer
                       px-3 py-2 rounded-full text-xs hover:bg-gray-200 border
                       dark:border-zinc-600 dark:hover:bg-zinc-700 transition-colors duration-200"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptSuggestions;
