// src/components/PassphraseGenerator.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, RefreshCw, Check } from 'lucide-react';
import { generatePassphrase, calculateComplexity } from '../utils/diceware';
import { ComplexityIndicator } from './ComplexityIndicator';

export function PassphraseGenerator() {
  const [numWords, setNumWords] = useState<number>(5);
  const [passphrase, setPassphrase] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Generate phrase on initial load or when word count changes
  useEffect(() => {
    handleGenerate();
  }, [numWords]);

  const handleGenerate = () => {
    setPassphrase(generatePassphrase(numWords));
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!passphrase.length) return;
    const text = passphrase.join('');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const complexity = calculateComplexity(numWords);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-20">
      
      {/* Controls Section */}
      <div className="bg-card border shadow-sm rounded-2xl p-6 md:p-8 mb-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <label htmlFor="word-count" className="text-sm font-semibold">
              Numero di parole: <span className="text-primary text-lg ml-1">{numWords}</span>
            </label>
          </div>
          <input 
            id="word-count"
            type="range" 
            min="3" 
            max="10" 
            value={numWords}
            onChange={(e) => setNumWords(parseInt(e.target.value))}
            className="w-full h-2 bg-secondary border border-border/50 rounded-lg appearance-none cursor-pointer accent-primary shadow-inner"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
            <span>3 (Veloce)</span>
            <span>10 (Massima Sicurezza)</span>
          </div>
        </div>

        {/* Display Area */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative min-h-[140px] bg-background border rounded-xl p-6 flex flex-col justify-center items-center gap-6">
            
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={passphrase.join('-')}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-2 md:gap-3"
              >
                {passphrase.map((word, idx) => (
                  <span 
                    key={`${word}-${idx}`} 
                    className="px-4 py-2 bg-secondary/50 border rounded-md text-xl md:text-2xl font-mono font-medium tracking-wide shadow-sm"
                  >
                    {word}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 w-full md:w-auto mt-2">
              <button
                onClick={handleCopy}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium transition-colors focus:ring-2 focus:ring-ring focus:outline-none"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                {copied ? 'Copiata!' : 'Copia'}
              </button>
              
              <button
                onClick={handleGenerate}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-md transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none focus:ring-offset-background"
              >
                <RefreshCw size={18} />
                Rigenera
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <ComplexityIndicator complexity={complexity} />
      
    </div>
  );
}
