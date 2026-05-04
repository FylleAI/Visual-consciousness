// ============================================================
//  ARCHIVIO — fonti, studi, articoli, idee sulla coscienza
// ============================================================
//
//  Per aggiungere una nuova voce, copia il blocco-template qui sotto
//  e incollalo in cima all'array (così le voci più recenti stanno in alto).
//
//  Campi:
//    titolo    — il nome della fonte (obbligatorio)
//    autore    — autore/i o "—" se non rilevante
//    anno      — anno di pubblicazione (numero o stringa)
//    tipo      — uno tra: "studio", "articolo", "libro", "video", "idea"
//    link      — URL completo (per "idea" può essere omesso)
//    tag       — array di parole-chiave (lowercase, in italiano o inglese)
//    nota      — una frase tua: perché ti interessa, cosa ti ha colpito
//    aggiunto  — data di aggiunta in formato "YYYY-MM-DD"
//
//  TEMPLATE (copia questo):
//  ---------------------------------------------------------
//  {
//    titolo:   "",
//    autore:   "",
//    anno:     2025,
//    tipo:     "studio",
//    link:     "https://",
//    tag:      ["coscienza", ""],
//    nota:     "",
//    aggiunto: "2026-05-04",
//  },
//  ---------------------------------------------------------
//
// ============================================================

const FONTI = [

  {
    titolo:   "Integrated Information Theory (IIT) 4.0",
    autore:   "Giulio Tononi et al.",
    anno:     2023,
    tipo:     "studio",
    link:     "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011465",
    tag:      ["coscienza", "iit", "informazione integrata", "matematica"],
    nota:     "L'idea che la coscienza sia identica a una struttura informativa massimamente integrata. Ambiziosa, controversa, da masticare lentamente.",
    aggiunto: "2026-05-04",
  },

  {
    titolo:   "Being You: A New Science of Consciousness",
    autore:   "Anil Seth",
    anno:     2021,
    tipo:     "libro",
    link:     "https://www.penguinrandomhouse.com/books/566315/being-you-by-anil-seth/",
    tag:      ["coscienza", "predictive coding", "fenomenologia", "divulgazione"],
    nota:     "La coscienza come 'controlled hallucination'. Ottimo punto di partenza accessibile.",
    aggiunto: "2026-05-04",
  },

  {
    titolo:   "The Free-Energy Principle: a unified brain theory?",
    autore:   "Karl Friston",
    anno:     2010,
    tipo:     "studio",
    link:     "https://www.nature.com/articles/nrn2787",
    tag:      ["free energy", "predictive coding", "cervello", "teoria unificata"],
    nota:     "Il cervello come macchina che minimizza la sorpresa. Cambia il modo in cui pensi al pensiero.",
    aggiunto: "2026-05-04",
  },

  {
    titolo:   "The Organization of Behavior (cap. sull'apprendimento sinaptico)",
    autore:   "Donald Hebb",
    anno:     1949,
    tipo:     "libro",
    link:     "https://pure.mpg.de/rest/items/item_2346268_3/component/file_2346267/content",
    tag:      ["hebbian", "memoria", "sinapsi", "classico"],
    nota:     "L'origine del 'neurons that fire together wire together'. La regola che muove la nostra simulazione.",
    aggiunto: "2026-05-04",
  },

  {
    titolo:   "I Am a Strange Loop",
    autore:   "Douglas Hofstadter",
    anno:     2007,
    tipo:     "libro",
    link:     "https://en.wikipedia.org/wiki/I_Am_a_Strange_Loop",
    tag:      ["coscienza", "self", "loop", "filosofia"],
    nota:     "L'io come pattern auto-referenziale. Pensa la coscienza come fenomeno emergente da feedback.",
    aggiunto: "2026-05-04",
  },

  {
    titolo:   "Memoria, traccia, ricordo: dove si nasconde un pensiero",
    autore:   "—",
    anno:     2026,
    tipo:     "idea",
    link:     "",
    tag:      ["nota personale", "memoria", "metafora"],
    nota:     "Un ricordo non è un dato fisso ma un percorso che esiste solo se ripercorso. Senza riattivazione, la traccia svanisce — ma ogni riattivazione la modifica leggermente. Vedi la simulazione: il sistema che evolve.",
    aggiunto: "2026-05-04",
  },

];

// expose to global so archivio.html can read it
if (typeof window !== "undefined") window.FONTI = FONTI;
