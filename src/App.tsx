import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Hero } from './components/Hero'
import { PassphraseGenerator } from './components/PassphraseGenerator'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Apply theme
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased selection:bg-primary/20 transition-colors duration-300">
      
      {/* Header */}
      <header className="w-full py-4 px-6 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/favicon.png" alt="Logo" className="w-8 h-8 rounded-md shadow-sm object-contain" />
          <span className="font-bold text-lg tracking-tight">Generatore Passphrase</span>
        </div>
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-secondary text-secondary-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-start pt-8 pb-16">
        <Hero />
        <PassphraseGenerator />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t bg-card/30">
        <p>
          Generatore di Passphrase sicure basato sul metodo Diceware. <br />
          Le parole sono stimate su <a href="https://pages.nist.gov/800-63-4/sp800-63b.html#appA" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary transition-colors">standard NIST SP 800-63B</a>.
        </p>
      </footer>
      
    </div>
  )
}

export default App
