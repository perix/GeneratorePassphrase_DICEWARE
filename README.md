# Generatore di Passphrase DICEWARE

Un'applicazione web moderna, sicura e professionale per generare passphrase mnemoniche basate sul metodo Diceware, ottimizzata per la lingua italiana.

## 🚀 Funzionalità

- **Generazione Diceware Italiana**: Utilizza un dizionario di 7776 parole in italiano per creare passphrase facili da ricordare ma difficili da indovinare.
- **Calcolo Entropia NIST**: Valutazione della sicurezza basata sullo standard **NIST SP 800-63B**, che misura la forza della password in bit di entropia.
- **Sicurezza Crittografica**: La casualità è garantita dall'uso delle `Web Crypto API` (lato client), assicurando che i "lanci di dadi" siano realmente casuali e generati localmente.
- **Interfaccia Moderna**: Design reattivo con supporto nativo per **Dark Mode** (predefinita) e Light Mode.
- **Copia Rapida**: Funzionalità di copia negli appunti immediata (senza spazi tra le parole per massima compatibilità).

## 🛠 Realizzazione Tecnica

L'applicazione è stata sviluppata con le seguenti tecnologie:

- **React 19 & TypeScript**: Per un'interfaccia robusta e tipizzata.
- **Vite**: Bundler ultra-veloce per uno sviluppo e build ottimizzati.
- **Tailwind CSS v4**: Utilizzato con le nuove specifiche `@theme inline` per una gestione avanzata dei design token e del passaggio tra i temi.
- **Framer Motion**: Per animazioni fluide della barra di complessità e della generazione delle parole.
- **Lucide React**: Set di icone moderno e coerente.

### Meccanismo di Randomicità
Il cuore del generatore utilizza `window.crypto.getRandomValues(new Uint32Array(1))`. Questo garantisce un livello di entropia di grado crittografico, a differenza di `Math.random()`. Ogni parola estratta aggiunge circa 12.92 bit di entropia alla passphrase finale.

---

## 🌎 Distribuzione su Netlify

Puoi mettere in produzione questo progetto su **Netlify** in pochi passaggi:

### Metodo 1: Tramite GitHub (Raccomandato)
1. Esegui il push del codice su una repository GitHub.
2. Accedi a [Netlify](https://www.netlify.com/) e clicca su **"Add new site"** -> **"Import an existing project"**.
3. Seleziona GitHub e scegli questa repository.
4. Netlify rileverà automaticamente le impostazioni di Vite:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Clicca su **Deploy** e il sito sarà online con aggiornamento automatico ad ogni push!

### Metodo 2: Tramite CLI
Se hai installato la `netlify-cli`:
```bash
npm run build
netlify deploy --dir=dist --prod
```

---

## 🛠 Sviluppo Locale

```bash
# Installa le dipendenze
npm install

# Avvia in modalità sviluppo
npm run dev

# Genera la build di produzione
npm run build
```
