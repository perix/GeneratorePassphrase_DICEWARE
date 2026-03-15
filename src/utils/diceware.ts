// src/utils/diceware.ts
import rawDict from './diceware_it.txt?raw';

export interface ComplexityResult {
  entropy: number;
  level: 'Debole' | 'Buona' | 'Forte' | 'Eccellente';
  colorClass: string;
}

// Map the list into a lookup object
const parseDictionary = (text: string): Record<string, string> => {
  const dictionary: Record<string, string> = {};
  const lines = text.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('BEGIN')) continue;
    
    // Diceware lines are like: "11111 0" or "66666 zoppo"
    const [id, word] = trimmed.split(/\s+/);
    if (id && word && id.length === 5) {
      dictionary[id] = word;
    }
  }
  return dictionary;
};

// Simulated loaded dictionary
const dictionary = parseDictionary(rawDict);

/**
 * Generates a true random number between min and max (inclusive) using Web Crypto API.
 */
function getRandomInt(min: number, max: number): number {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  
  // Convert standard random to a range
  // Safe integer limit mapping (max 4294967295)
  const range = max - min + 1;
  return min + (array[0] % range);
}

/**
 * Returns a 5-digit string of simulated dice rolls (1-6)
 */
function rollDice(): string {
  let result = '';
  for (let i = 0; i < 5; i++) {
    result += getRandomInt(1, 6).toString();
  }
  return result;
}

/**
 * Generates the requested number of words using the Diceware method
 */
export function generatePassphrase(numWords: number = 5): string[] {
  const words: string[] = [];
  
  for (let i = 0; i < numWords; i++) {
    const roll = rollDice();
    const word = dictionary[roll];
    if (word) {
      words.push(word);
    } else {
      words.push('errore-dizionario'); // Fallback case, should never be reached if dictionary is valid
    }
  }
  
  return words;
}

/**
 * Calculates the entropy and complexity level according to NIST guidelines.
 * With a 7776 word list, each word adds ~12.92 bits of entropy.
 */
export function calculateComplexity(numWords: number): ComplexityResult {
  const entropyPerWord = Math.log2(7776); // ~ 12.9248
  const totalEntropy = numWords * entropyPerWord;
  
  let level: ComplexityResult['level'];
  let colorClass: string;

  if (totalEntropy < 50) {
    level = 'Debole';
    colorClass = 'text-destructive';
  } else if (totalEntropy < 65) {
    level = 'Buona';
    colorClass = 'text-yellow-500';
  } else if (totalEntropy < 81) {
    level = 'Forte';
    colorClass = 'text-green-500';
  } else {
    level = 'Eccellente';
    colorClass = 'text-blue-500';
  }

  return {
    entropy: Math.round(totalEntropy * 10) / 10,
    level,
    colorClass
  };
}
