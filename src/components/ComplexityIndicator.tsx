// src/components/ComplexityIndicator.tsx
import { motion } from 'framer-motion';
import { type ComplexityResult } from '../utils/diceware';

interface ComplexityIndicatorProps {
  complexity: ComplexityResult;
}

export function ComplexityIndicator({ complexity }: ComplexityIndicatorProps) {
  // Mapping level to a percentage for the progress bar
  const getPercentage = () => {
    switch(complexity.level) {
      case 'Debole': return 25;
      case 'Buona': return 50;
      case 'Forte': return 75;
      case 'Eccellente': return 100;
      default: return 0;
    }
  };

  // Mapping level to a background color class for the progress bar fill
  const getBgClass = () => {
    switch(complexity.level) {
      case 'Debole': return 'bg-destructive';
      case 'Buona': return 'bg-yellow-500';
      case 'Forte': return 'bg-green-500';
      case 'Eccellente': return 'bg-blue-500';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="w-full mt-8 space-y-3 bg-card p-6 rounded-xl border shadow-sm">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Livello di Sicurezza (NIST SP 800-63B)</h3>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-bold ${complexity.colorClass}`}>
              {complexity.level}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm font-mono text-muted-foreground">
            Entropia: <span className="text-foreground font-semibold">{complexity.entropy} bits</span>
          </span>
        </div>
      </div>
      
      {/* Progress Bar Container */}
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative">
        <motion.div 
          className={`absolute top-0 left-0 h-full rounded-full ${getBgClass()}`}
          initial={{ width: 0 }}
          animate={{ width: `${getPercentage()}%` }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
        />
      </div>
      
      <p className="text-xs text-muted-foreground mt-2">
        {complexity.level === 'Debole' && "Aggiungi più parole per renderla sicura contro attacchi brute-force."}
        {complexity.level === 'Buona' && "Livello di sicurezza base accettabile per la maggior parte degli usi."}
        {complexity.level === 'Forte' && "Molto sicura. Raccomandata per account critici e password manager."}
        {complexity.level === 'Eccellente' && "Praticamente inviolabile con le tecnologie attuali e future."}
      </p>
    </div>
  );
}
