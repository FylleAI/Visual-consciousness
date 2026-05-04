# Prompt di onboarding per Claude Code

Questo è il prompt che incolli come **primo messaggio** quando avvii
Claude Code in questa repository. Lo scopo è dargli tutto il contesto e
fargli fare un'analisi diagnostica iniziale.

---

## 📋 Copia da qui ↓

Ciao. Questo è un progetto di ricerca personale di Davide Colella (CEO di Fylle S.R.L.) che vive all'intersezione tra arte generativa, neuroscienza e filosofia della mente. Prima di chiedermi di scrivere codice, leggi e interiorizza il contesto.

## Contesto

Il progetto si chiama **coscienza**. È composto da due pagine:

1. `index.html` — una simulazione canvas in vanilla JS che modella visivamente la coscienza come sistema dinamico: neuroni che si attivano, si toccano, si trasformano in ricordi, generano sinapsi, lasciano sentieri, decadono, dimenticano. Il sistema evolve nel tempo.

2. `archivio.html` — una repository di studi, articoli, libri e idee sulla coscienza, alimentata da `fonti.js`. È il livello-meta: la rete di fonti da cui la simulazione attinge concettualmente.

## La tesi sotto il progetto

La simulazione è un'implementazione operativa minimale di una tesi sull'**emergenza interazionale**: l'idea che l'intelligenza/coscienza non emerga dall'integrazione statica dell'informazione (à la Tononi, IIT) né dalla complessità in quanto tale, ma dalla **messa in moto** — dall'interazione continua tra schema e realtà (Gell-Mann CAS + Friston predictive processing). Questa tesi è anche il cuore filosofico di Fylle, una piattaforma AI di adaptive context attorno agli LLM.

I documenti di riferimento sono in `docs/`:
- `docs/THESIS.md` — il ponte tra meccaniche della simulazione e concetti teorici, e una mappa di cosa è già modellato e cosa manca
- `docs/ROADMAP.md` — le fasi di sviluppo previste (semantizzazione delle aree → multi-scala → persistenza → personalizzazione)

Leggi entrambi prima di proseguire.

## Cosa devi fare ora

**Step 1 — Diagnostica.** Leggi tutti i file del repo (`index.html`, `archivio.html`, `fonti.js`, `README.md`, `docs/THESIS.md`, `docs/ROADMAP.md`) e poi rispondi a queste domande in forma sintetica:

1. **Stato del codice**: qualità della struttura, eventuali code smell, duplicazioni, occasioni mancate. NON proporre refactor massivi — segnala solo cose che davvero impediscono di crescere.

2. **Coerenza tesi ↔ implementazione**: quali meccaniche della simulazione modellano accuratamente la tesi e quali sono solo "estetica"? Dove ci sono incoerenze tra ciò che il codice fa e ciò che la tesi dice?

3. **Punti d'entrata per la Fase 1 (semantizzazione)**: dato lo stato attuale di `index.html`, qual è il modo meno invasivo per introdurre il concetto di "regioni cerebrali"? Schizza una proposta architetturale (struttura dati, dove metterla, come collegarla al ciclo di update/render) — senza ancora scrivere il codice.

4. **Rischi**: cosa rischia di rompersi se procediamo? Performance, complessità del codice, leggibilità, fedeltà alla tesi.

**Step 2 — Setup Git.** Se il repo non è ancora inizializzato come git, fallo, e fai un primo commit con messaggio "phase 0: foundation". Suggeriscimi (senza ancora eseguire) i comandi per pushare su GitHub. Se preferisci che ti dia tu il remote, chiedimelo.

**Step 3 — Aspetta istruzioni.** Una volta fatti i due step sopra, fermati. Non iniziare a scrivere codice della Fase 1 finché non te lo dico esplicitamente. Voglio leggere la tua diagnostica prima.

## Stile e principi

- Risposte concise, in italiano, dirette. Niente preamboli, niente disclaimer, niente apologie.
- Quando proponi qualcosa, dimmi anche cosa **non** fare e perché.
- Se trovi qualcosa di importante che la tesi non considera, dillo.
- Se trovi che una mia richiesta sia in tensione con la tesi, dillo.
- Vanilla JS, zero dipendenze, single-substrate finché possibile.
- Ogni meccanica nuova deve essere giustificabile da un riferimento (anche solo concettuale) della tesi.

Procedi.

## ↑ Copia fino a qui

---

## Note operative

- Questo prompt va incollato **dentro la repo** — Claude Code ha bisogno
  di poter leggere i file. Quindi prima `cd coscienza/` e poi
  `claude` (o come avvii Claude Code).
- Se Claude Code propone modifiche grosse senza che tu lo abbia chiesto,
  fermalo. Lo stile vuole: prima diagnosi, poi proposta, poi (su via libera)
  esecuzione.
- Quando passi alla Fase 1, ti basterà dire: *"Procedi con la Fase 1
  della roadmap. Prima proponi l'architettura in dettaglio, poi mostra
  il diff prima di applicare."*
