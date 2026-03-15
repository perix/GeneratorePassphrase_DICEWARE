// src/components/Hero.tsx
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="text-center py-12 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Generatore di Passphrase <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">Sicure</span>
          <span className="block mt-2 text-2xl md:text-4xl font-semibold text-muted-foreground tracking-normal">
            (metodo diceware)
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Crea password mnemoniche estremamente sicure e facili da ricordare. Basato sul metodo Diceware con lista in lingua italiana. Più parole scegli, più la tua passphrase sarà inviolabile. La <strong>randomicità</strong> è garantita crittograficamente in locale sul tuo browser tramite le <code className="font-mono text-[0.9em] bg-secondary px-1.5 py-0.5 rounded">Web Crypto API</code>, assicurando che le combinazioni non siano prevedibili né trasmesse via rete.
        </p>
      </motion.div>
    </section>
  );
}
