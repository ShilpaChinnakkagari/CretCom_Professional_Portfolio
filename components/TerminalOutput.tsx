
import React from 'react';
import { CommandResult, LineType } from '../types';

interface TerminalOutputProps {
  history: CommandResult[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ history }) => {
  return (
    <>
      {history.map((line, index) => (
        <div key={index} className="mb-3 animate-in fade-in slide-in-from-left-2 duration-300">
          {line.type === LineType.INPUT ? (
            <div className="flex items-center gap-2">
              <span className="text-[var(--secondary)] font-bold glow-text">visitor@shilpa-shell</span>
              <span className="text-gray-500 opacity-70">:</span>
              <span className="text-white font-bold">~</span>
              <span className="text-[var(--accent)] font-bold glow-text">$</span>
              <span className="text-white ml-1 font-bold tracking-wider">{line.content as string}</span>
            </div>
          ) : line.type === LineType.JSX ? (
            <div className="terminal-jsx-container">
              {line.content}
            </div>
          ) : (
            <pre className={`whitespace-pre-wrap font-bold leading-relaxed ${
              line.type === LineType.ERROR ? 'text-red-500 glow-text brightness-150' : 
              line.type === LineType.SUCCESS ? 'text-[var(--primary)] glow-text scale-105 origin-left' : 
              'text-[var(--primary)] glow-text brightness-125'
            }`}>
              {line.content}
            </pre>
          )}
        </div>
      ))}
    </>
  );
};
