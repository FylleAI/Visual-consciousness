# ROADMAP

Sviluppo del progetto in fasi. Ogni fase è auto-contenuta: aggiunge un layer
senza rompere ciò che c'è sotto. La direzione è dalla **simulazione generica**
verso la **simulazione personale**.

---

## ✅ Fase 0 — Foundation (fatta)

Simulazione single-substrate con dinamiche multi-scala-ish:
neuroni, ricordi, sinapsi, sentieri, decadimento, recall, oblio.
Archivio di fonti con filtri/ricerca/tag.

**File**: `index.html`, `archivio.html`, `fonti.js`.

---

## Fase 1 — Semantizzazione delle aree

**Obiettivo**: dividere il canvas in regioni nominate, ognuna con propria
specializzazione, palette, e dinamica.

**Regioni iniziali proposte** (mappabili sul cervello reale):

- **percezione** — area input, riceve gli stimoli esterni (click)
- **memoria episodica** — eventi datati, alta fedeltà, decadimento medio
- **memoria semantica** — concetti astratti, decadimento lento, alta connettività
- **linguaggio** — area associativa, alta densità di sinapsi
- **default mode** — attivo a riposo, fa recall spontaneo
- **emozione** — modulatore di precisione: amplifica o attenua i feedback delle altre

**Implementazione**:
- coordinate regionali (x_min, y_min, x_max, y_max) o forma poligonale
- ogni neurone appartiene a una regione, eredita dinamica
- transizioni inter-regionali = sinapsi a lungo raggio (white matter)
- visualizzazione: alone soft di colore per regione, label discreta

**Letteratura di riferimento**: parcellation atlases (es. Yeo 7-network),
brain modes (Mesulam), Default Mode Network (Raichle).

---

## Fase 2 — Multi-scala temporale esplicita

**Obiettivo**: implementare le 5 scale di feedback della tesi
(sinaptica, circuitale, neuromodulatoria, strutturale, epigenetica)
con costanti di tempo distinte.

- **sinaptica** (frame): forza singola connessione (già presente)
- **circuitale** (secondi): topologia delle connessioni regionali
- **neuromodulatoria** (decine di secondi): segnale globale di precisione,
  modula soglie e velocità di tutto il sistema
- **strutturale** (minuti): riorganizzazione delle regioni stesse
- **epigenetica** (sessione → sessioni): persistenza tra reload via localStorage

**Bypass events**: feedback ad altissima precisione che saltano direttamente
ai livelli profondi (l'analogo del trauma o dell'insight).

---

## Fase 3 — Persistenza & evoluzione tra sessioni

**Obiettivo**: il sistema *continua* dove è stato lasciato.

- snapshot dello stato in `localStorage` (neuroni, sinapsi, intensità, regioni)
- consolidamento offline al reload (analogo del sonno): riorganizzazione,
  rinforzo dei pattern frequenti, oblio dei rumorosi
- timeline visibile: una piccola finestra che mostra "stato 7 giorni fa"
- export/import dello stato come JSON (per backup, fork, condivisione)

---

## Fase 4 — Personalizzazione (la tua mente)

**Obiettivo**: il sistema diventa un modello della *tua* coscienza,
non di una coscienza generica.

Input streams da alimentare a regioni specifiche:
- **calendar** → memoria prospettica (futuro)
- **journal / Apple Notes** → memoria autobiografica
- **musica ascoltata** → emozione
- **link salvati / archivio** → memoria semantica
- **conversazioni recenti** → linguaggio

Ogni input nuovo entra come stimolo nell'area pertinente; pattern ricorrenti
generano cluster densi; abbandoni causano decadimento visibile.

**Pipeline**: script Python che legge le fonti, le trasforma in eventi
JSON, li esporta in `data/events.json`. La simulazione li legge al boot
e li ingerisce gradualmente.

**Privacy**: tutto locale. Nessun dato lascia la macchina.

---

## Fase 5 — Loop verso Fylle

**Obiettivo**: chiudere il cerchio tra ricerca personale e architettura
del prodotto.

- pubblicare un essay che lega le osservazioni della simulazione personale
  ai principi della tesi Fylle (Pack/Brief/Output → regioni/aree/output)
- la simulazione diventa una *demo viva* della tesi durante pitch o talk
- eventuali insight emergenti tornano nel literature review come
  empirical observations

---

## Principi guida

- **niente dipendenze pesanti** finché la fase non lo richiede
- **single-substrate** (un solo HTML/JS file finché possibile)
- **ogni fase è demo-able** — alla fine di ogni fase devi poter mostrare qualcosa
- **la teoria precede il codice** — ogni meccanica nuova è giustificata da un
  riferimento del literature review
- **il personale informa il generale** — quello che impari sulla tua mente
  torna nella tesi
