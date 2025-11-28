import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="relative px-4 py-2 rounded-xl bg-gray-900 text-white 
                 hover:bg-gray-800 active:scale-95 transition-all duration-200 
                 flex items-center gap-2"
    >
      <span>{copied ? "Copied!" : "Copy"}</span>

      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>

      {/* Floating “Copied” sticker */}
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                         text-xs bg-black text-white px-2 py-1 rounded-lg 
                         animate-bounce">
          ✔ Copied!
        </span>
      )}
    </button>
  );
}
