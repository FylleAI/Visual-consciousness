# coscienza

Un piccolo progetto online: una simulazione visiva della coscienza
(neuroni, ricordi, tracce, sinapsi che evolvono nel tempo) e un archivio
in evoluzione di studi, articoli e idee sull'argomento.

## Struttura

```
coscienza/
  index.html         → simulazione (pagina principale)
  archivio.html      → repository di fonti
  fonti.js           → ★ il file che modifichi per aggiungere voci all'archivio
  README.md          → questo file
  .gitignore
  docs/
    THESIS.md        → ponte simulazione ↔ tesi sull'emergenza interazionale
    ROADMAP.md       → fasi di sviluppo
    onboarding-claude-code.md  → prompt da incollare in Claude Code
    GITHUB.md        → istruzioni per push su GitHub
```

**Per iniziare a lavorarci con Claude Code**: vedi `docs/onboarding-claude-code.md`.
**Per capire dove sta andando il progetto**: vedi `docs/ROADMAP.md`.
**Per il legame con la tesi**: vedi `docs/THESIS.md`.

## Come aggiungere una voce all'archivio

Apri `fonti.js`. Vedrai un array `FONTI` con un commento-template all'inizio.
Per aggiungere una voce, copia questo blocco e incollalo **in cima all'array**
(così le voci più recenti restano in alto):

```js
{
  titolo:   "Titolo della fonte",
  autore:   "Nome Cognome",
  anno:     2024,
  tipo:     "studio",         // studio | articolo | libro | video | idea
  link:     "https://...",    // per le idee personali può essere ""
  tag:      ["coscienza", "memoria"],
  nota:     "Perché ti interessa, in una frase.",
  aggiunto: "2026-05-04",     // data di oggi, formato YYYY-MM-DD
},
```

Salva, ricarica `archivio.html` nel browser → la voce nuova è lì.

### Tipi disponibili

- `studio` — paper accademico, ricerca peer-reviewed
- `articolo` — articolo divulgativo o di riflessione
- `libro` — saggio, romanzo rilevante
- `video` — talk, podcast, documentario
- `idea` — una nota tua, un pensiero in evoluzione

## Come pubblicarlo online

Hai tre opzioni semplici, tutte gratuite:

### 1. Netlify Drop (la più rapida — zero setup)
1. Vai su https://app.netlify.com/drop
2. Trascina la cartella `coscienza/` nella finestra
3. In ~10 secondi hai un URL pubblico.
4. Per aggiornare: ri-trascina la cartella aggiornata.

### 2. GitHub Pages (se vuoi versionare con Git)
1. Crea un repo `coscienza` su GitHub
2. Carica i file (anche dall'interfaccia web di GitHub)
3. Vai in Settings → Pages → Source: `main` branch, root
4. URL pubblico: `https://<tuo-username>.github.io/coscienza/`

### 3. Vercel
1. https://vercel.com → Import Project → carica la cartella
2. Deploy. Dominio gratuito incluso.

## Come aggiornare la simulazione

La simulazione è tutta in `index.html` (HTML + CSS + JS in un solo file,
zero dipendenze). Modifica il codice JavaScript dentro il `<script>` finale
per cambiare:

- `TARGET_DENSITY` → quanti neuroni per pixel² (densità iniziale)
- `MAX_ACTIVE` → quanti impulsi possono essere attivi insieme
- `MAX_NEURONS` → capacità totale del sistema
- `n.lastTouched` thresholds (9000, 30000) → velocità di decadimento
- `0.05` nella `checkCollisions` → probabilità di nascita nuovi ricordi
- I gradienti `hsla(...)` per cambiare la palette

## Regole del sistema (riassunto)

**Elementi**: impulsi (gialli, in moto) · ricordi (viola, fermi) · sentieri
(scie dorate persistenti) · sinapsi (legami tra neuroni).

**Collisione**: l'impulso si ferma e diventa ricordo; il ricordo toccato
si attiva. Entrambi vengono rinforzati. Si crea/rinforza una sinapsi.
Raramente nasce un nuovo ricordo nel punto d'incontro.

**Evoluzione**: rinforzo hebbiano · decadimento dopo inattività · oblio
dopo lunga inattività · sentieri che persistono ~10-15s · recall
spontaneo proporzionale all'intensità.

**Stimolo esterno**: click/trascina = sensazione che attiva il ricordo
più vicino o ne crea uno nuovo.

---

*Tre concetti-chiave: trasferimento (movimento ↔ memoria), rinforzo
hebbiano (ciò che si attiva insieme si lega), decadimento (senza uso,
tutto svanisce).*
