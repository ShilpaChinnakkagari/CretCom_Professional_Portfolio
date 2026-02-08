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

  // Function to trigger resume download
  const downloadResume = useCallback(() => {
    try {
      const fileId = '1Alcm_dig4wF1xmICJMS8ypJVY2gqjnkx';
      
      // Method 1: Direct download link
      const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      // Method 2: Preview URL
      const previewUrl = `https://drive.google.com/file/d/${fileId}/view`;
      
      // Create download link
      const link = document.createElement('a');
      link.href = directUrl;
      link.download = 'Shilpa_Chinnakkagari_Resume.docx';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // For mobile devices, open in new tab
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.open(previewUrl, '_blank');
        return { success: true, method: 'preview' };
      }
      
      // For desktop, try direct download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        
        // Open preview as backup after 500ms
        setTimeout(() => {
          window.open(previewUrl, '_blank');
        }, 500);
      }, 100);
      
      return { success: true, method: 'direct' };
    } catch (error) {
      console.error('Download error:', error);
      // Fallback: Open Google Drive
      const fileId = '1Alcm_dig4wF1xmICJMS8ypJVY2gqjnkx';
      window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
      return { success: false, error };
    }
  }, []);

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const args = trimmedInput.toLowerCase().split(' ');
    const cmd = args[0];

    // Theme switching logic
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

    // Special handling for download resume command
    if (trimmedInput.toLowerCase() === 'download resume') {
      // Add downloading message
      setHistory(prev => [...prev, { 
        type: LineType.SUCCESS, 
        content: '📄 Initiating resume download...' 
      }]);
      
      // Trigger download after short delay
      setTimeout(() => {
        const result = downloadResume();
        
        // Add final messages
        setTimeout(() => {
          if (result.success) {
            setHistory(prev => [...prev, { 
              type: LineType.SUCCESS, 
              content: '✅ Download process started!' 
            }]);
            
            // Add instructions
            setHistory(prev => [...prev, { 
              type: LineType.OUTPUT, 
              content: `💡 Instructions:\n1. Check your browser's downloads\n2. Look for "Shilpa_Chinnakkagari_Resume.docx"\n3. If it opened in Google Drive, click the download button (↓)` 
            }]);
            
          } else {
            setHistory(prev => [...prev, { 
              type: LineType.ERROR, 
              content: '⚠️ Could not auto-download. Opening Google Drive...' 
            }]);
          }
        }, 500);
      }, 300);
      
      return;
    }

    // Process other commands normally
    const output = processCommand(trimmedInput);
    setHistory(prev => [...prev, ...output]);
  }, [downloadResume]);

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