
import React, { useState, useEffect, useRef } from 'react';
import { COMMANDS } from '../constants';

interface TerminalPromptProps {
  onCommand: (cmd: string) => void;
  commandHistory: string[];
  historyPointer: number;
  setHistoryPointer: React.Dispatch<React.SetStateAction<number>>;
}

export const TerminalPrompt: React.FC<TerminalPromptProps> = ({ 
  onCommand, 
  commandHistory,
  historyPointer,
  setHistoryPointer
}) => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();
    focusInput();
    window.addEventListener('click', focusInput);
    return () => window.removeEventListener('click', focusInput);
  }, []);

  useEffect(() => {
    if (input.trim()) {
      const match = COMMANDS.find(c => c.startsWith(input.toLowerCase()));
      setSuggestion(match ? match : '');
    } else {
      setSuggestion('');
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      onCommand(cmd);
      setInput('');
      setSuggestion('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyPointer < commandHistory.length - 1) {
        const nextPtr = historyPointer + 1;
        setHistoryPointer(nextPtr);
        setInput(commandHistory[nextPtr]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer > 0) {
        const nextPtr = historyPointer - 1;
        setHistoryPointer(nextPtr);
        setInput(commandHistory[nextPtr]);
      } else {
        setHistoryPointer(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestion) {
        setInput(suggestion);
      }
    }
  };

  return (
    <div className="relative flex items-center gap-2 pb-8 md:pb-6 border-t border-[var(--border)] pt-6">
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[var(--secondary)] font-bold glow-text hidden md:inline">visitor@shilpa-shell</span>
        <span className="text-gray-500 opacity-50 hidden md:inline">:</span>
        <span className="text-white font-bold">~</span>
        <span className="text-[var(--accent)] font-bold glow-text">$</span>
      </div>
      
      <div className="relative flex-1">
        {/* Ghost Suggestion */}
        {suggestion && input && suggestion !== input && (
          <div className="absolute inset-0 text-white opacity-20 pointer-events-none whitespace-pre font-bold tracking-wider">
            {input}{suggestion.substring(input.length)}
          </div>
        )}
        
        <input
          ref={inputRef}
          type="text"
          autoFocus
          className="w-full bg-transparent outline-none border-none text-white caret-transparent font-bold tracking-wider"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
        />
        <div 
          className="absolute top-0 pointer-events-none cursor"
          style={{ left: `${input.length}ch` }}
        />
      </div>

      <div className="absolute bottom-2 right-2 text-[10px] text-[var(--primary)] font-bold uppercase tracking-widest hidden md:block opacity-70 glow-text">
        [ Tab to Auto-complete | Up/Down for History ]
      </div>
    </div>
  );
};
