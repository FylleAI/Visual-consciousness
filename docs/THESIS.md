# THESIS — il ponte tra simulazione e teoria

Questo documento collega le meccaniche della simulazione `index.html` ai concetti
della tesi sulla coscienza e sull'**emergenza interazionale** (cfr. literature
review v2.1, "Adaptive context as the next frontier in AI").

## La tesi in una frase

> L'emergenza non nasce dall'integrazione dell'informazione (Tononi) né dalla
> complessità in quanto tale. Nasce dalla **messa in moto** — dall'interazione
> continua tra schema e realtà. Il loop è costitutivo, non accessorio.

Tre piloni teorici:

1. **Predictive processing** (Friston, Clark) — il cervello minimizza la
   sorpresa aggiornando il proprio modello interno
2. **CAS / schema** (Gell-Mann) — i sistemi complessi adattivi comprimono
   regolarità in schemi, predicono, agiscono, ricevono feedback, evolvono
3. **Substrate gap** — il neurone *è* la sua storia (hardware adattivo);
   il transistor non lo è (hardware inerte). Servono software-layer come
   compensazione.

## Mapping: meccaniche della simulazione ↔ concetti della tesi

| Meccanica nella simulazione | Concetto teorico |
|---|---|
| Trasferimento impulso → ricordo (collisione) | Ciclo CAS: schema attivato dall'interazione |
| Rinforzo della sinapsi a ogni collisione | Plasticità Hebbiana, scala sinaptica |
| Crescita di intensità/raggio del ricordo toccato | Effective complexity (Gell-Mann & Lloyd 1996) |
| Decadimento dei ricordi inattivi | Coarse-graining: il rumore viene scartato |
| Oblio (rimozione del ricordo) | Compressione asintotica dello schema |
| Recall spontaneo proporzionale all'intensità | Precision-weighting (Friston) |
| Nascita di un nuovo ricordo da collisione | Adjacent possible (Kauffman): nuove combinazioni emergono dall'interazione |
| Sentieri persistenti dorati | Strutturazione del substrato: la traccia *è* il sistema |
| Click utente che attiva il ricordo più vicino | Stimolo esogeno: feedback ad alta precisione |

## Cosa la simulazione attuale **non** modella ancora

(Ed è qui che si lavora nei prossimi step.)

| Concetto della tesi | Stato | Note |
|---|---|---|
| **Multi-scala temporale esplicita** | Parziale | Le costanti di tempo esistono ma non sono organizzate in 5 scale distinte |
| **Aree semantiche / regioni** | Mancante | Tutto è omogeneo. Nessuna specializzazione spaziale |
| **Neuromodulazione globale** | Mancante | Non c'è un segnale di precisione che cambia il regime operativo dell'intero sistema |
| **Bypass events** ("accidenti" di Gell-Mann) | Mancante | Tutti i feedback hanno la stessa logica gerarchica |
| **Schema gerarchico Pack/Brief/Output** | Mancante | Sistema attualmente piatto |
| **Connessioni inter-regionali** | Mancante | Le sinapsi sono solo locali |
| **Consolidamento offline** ("sonno") | Mancante | Nessuna fase di riorganizzazione differita |
| **Persistenza tra sessioni** | Mancante | Il sistema riparte ogni volta da zero |

## Perché questo progetto

La simulazione non è una visualizzazione decorativa della tesi. È una sua
**implementazione operativa minimale**: un piccolo CAS che vive nel browser,
che riceve stimoli (click), li integra, evolve, dimentica.

Man mano che il progetto cresce verso la **semantizzazione delle aree** e la
**simulazione personale** (alimentata dai dati reali della propria mente —
calendario, journal, conversazioni), diventa anche un esperimento epistemico:
un modello in scala 1:N della propria coscienza, dove N tende a scendere
nel tempo.

L'archivio (`archivio.html`) è il livello-meta: la rete delle fonti e delle
idee da cui questa simulazione attinge. Le due pagine sono speculari —
una osserva la coscienza dall'interno, l'altra la cartografia dall'esterno.
