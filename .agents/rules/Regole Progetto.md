
# Regole di progetto (Workspace Rule)

Questa regola si applica solo a questa workspace e integra le preferenze globali definite nel GEMINI.md globale (~/.gemini).  
Questo progetto è un sito web vetrina (landing / marketing site).

# TEST – Regola di verifica workspace

Per qualsiasi risposta **in questa workspace**:

- Nella PRIMA riga del messaggio, prima di tutto il resto, scrivi esattamente:
  `TEST-WEB-RULE-ATTIVA`
- Poi prosegui a rispondere normalmente seguendo le altre regole.

Se non sei in questa workspace, ignora questa istruzione.

## 1. Obiettivo del progetto

- Il progetto ha lo scopo di realizzare una applicazione web responsive e pronta per l’uso reale per la generazione di una passphrase utilizando il metodo diceware.
- L'utente deve poter leggere una breve descrizione dell'approccio diceware e poi gli deve essere chiesta la lunghezza delIa passphrase (che corrisponde al numero di volte in cui deve essere lanciato il dato per la scelta delle parole dal dizionario diceware)
- il dizionario si trova nel file presente nella cartella .Diceware_IT. Si tratta di un file testuale il cui metodo di lettura è descritto nel file word_list_diceware_it-IT-4.pdf.

## 2. Stack web di riferimento (se non diversamente indicato)

- Usa uno stack moderno orientato a componenti:
	 - React o Next.js per struttura e routing.
	  - Uno strumento di styling a scelta coerente con il progetto (Tailwind CSS, CSS Modules, styled-components, ecc.).

## 3. Struttura e organizzazione del codice

- Mantieni il codice organizzato per sezioni/feature del sito (es. hero, features, testimonials, pricing, contact).
- Crea componenti riutilizzabili per elementi comuni:
  - bottoni, card, sezioni di layout, header/footer, form di contatto.
- Se il progetto definisce cartelle dedicate (es. `components/`, `sections/`, `layouts/`), usale e mantieniti coerente.

## 4. UX, brand e design system

- Prima di modificare pesantemente il design, controlla se esiste un file di linee guida (es. `brand-guidelines.md`, `design-system.md`).
- Se presente:
  - rispetta font, palette colori, spaziature, stile dei componenti base.
- Se non presente:
  - crea e mantieni coerenza interna (tipografia, palette limitata, spaziatura consistente) e spiega le scelte importanti nei commenti o nella documentazione.

Assicurati che il sito sia responsivo (mobile-first o almeno mobile-friendly) e leggibile (contrasto sufficiente, gerarchia visiva chiara).

## 5. Workflow consigliato in Antigravity

- Modalità consultiva (`/ask` o richieste senza modifiche):
  - per definire struttura delle sezioni, messaggi chiave, UX e copy.
- Pianificazione (`/plan` o richieste di piano):
  - per cambi importanti (nuovo layout, revisione completa della landing, refactoring di componenti principali);
  - produci un piano con passi numerati, sezioni coinvolte e strategia di test (verifiche visive, responsive, eventuali test automatizzati).
- Modalità normale (senza workflow specifici):
  - per implementare o rifinire sezioni, componenti e stile, eseguendo comandi standard di sviluppo (build, dev server, lint, test) secondo le regole globali di sicurezza.

Eventuali workflow aggiuntivi specifici di questo progetto (es. `/lint-and-test-web`, `/generate-seo-report`) sono definiti in `.agent/workflows/` se presenti.

## 6. Qualità del codice per questa app

Oltre alle regole globali (error handling, modularità, niente hard-coding):

- Mantieni i componenti piccoli e focalizzati, con una responsabilità chiara (layout, contenuto, logica di interazione).
- Evita di duplicare sezioni o markup complesso: estrai componenti riutilizzabili quando individui pattern ripetuti.
- Gestisci con cura:
  - stati di caricamento (se presenti) e errori per form di contatto o integrazioni esterne (es. invio dati a backend, newsletter).

## 7. Hard‑coding, configurazione e contenuti

- Non hardcodare valori che potrebbero cambiare spesso (URL di backend, ID di tracking, testi chiave di copy, parametri di configurazione).
- Dove possibile:
  - isola queste informazioni in file di configurazione o in un modulo di costanti (es. `config`/`constants`);
  - se il progetto supporta un sistema di contenuti (CMS, file markdown, JSON), usa quello.

## 8. Evoluzione del progetto

- Se emergono pattern ricorrenti (layout di sezioni, componenti, token di design), proponi di consolidarli in:
  - un file di design system (token per colori, tipografia, spacing);  
  - componenti condivisi.
- Se noti problemi sistematici (accessibilità, SEO, performance), proponi piani di miglioramento progressivi invece di cambi monolitici.

L’obiettivo è che questo sito vetrina rimanga semplice, coerente e facile da evolvere, sfruttando le regole globali e la struttura di progetto già presente.
