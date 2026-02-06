
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TerminalOutput } from './components/TerminalOutput';
import { TerminalPrompt } from './components/TerminalPrompt';
import { processCommand } from './services/commandProcessor';
import { CommandResult, LineType } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState('matrix');
  const [history, setHistory] = useState<CommandResult[]>([
    {
      type: LineType.OUTPUT,
      content: `Welcome to Shilpa's Portfolio Shell v2.4.0 (stable)
System: AI Graduate from MITS
Type 'help' to see available commands.`
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const args = trimmedInput.toLowerCase().split(' ');
    const cmd = args[0];

    // Theme switching logic inside App to update state
    if (cmd === 'theme' && args[1]) {
      const themes = ['matrix', 'cyber', 'dracula', 'amber'];
      if (themes.includes(args[1])) {
        setTheme(args[1]);
      }
    }

    setCommandHistory(prev => [trimmedInput, ...prev]);
    setHistoryPointer(-1);

    // Add user input to history
    setHistory(prev => [...prev, { type: LineType.INPUT, content: trimmedInput }]);

    // Clear command check
    if (trimmedInput.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    // Process and add output
    const output = processCommand(trimmedInput);
    setHistory(prev => [...prev, ...output]);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className={`terminal-container theme-${theme} font-mono text-sm md:text-base leading-relaxed`}>
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto mb-4 space-y-2 pr-2"
      >
        <TerminalOutput history={history} />
      </div>
      <TerminalPrompt 
        onCommand={executeCommand}
        commandHistory={commandHistory}
        historyPointer={historyPointer}
        setHistoryPointer={setHistoryPointer}
      />
    </div>
  );
};

export default App;
