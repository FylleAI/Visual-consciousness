# Setup Git & GitHub

Istruzioni rapide per pubblicare la repo su GitHub.

## 1. Inizializza il repo locale

Dalla cartella `coscienza/`:

```bash
git init
git add .
git commit -m "phase 0: foundation"
```

## 2. Crea il repo su GitHub

Vai su https://github.com/new e crea un repo:

- **Nome**: `coscienza` (o quello che preferisci)
- **Visibilità**: privato all'inizio (lo rendi pubblico quando ti pare)
- **NON** inizializzare con README/gitignore/license (li abbiamo già o non servono)

GitHub ti mostrerà i comandi per il push. Saranno simili a:

```bash
git remote add origin git@github.com:<tuo-username>/coscienza.git
git branch -M main
git push -u origin main
```

## 3. Pubblicazione del sito (gratuita)

Hai due strade.

### Opzione A — GitHub Pages (versionato + URL pubblico)

1. Settings → Pages
2. Source: `main` branch, root (`/`)
3. URL pubblico: `https://<username>.github.io/coscienza/`

Aggiornamenti = `git push`. Pages si rideploy automaticamente in ~1 minuto.

### Opzione B — Netlify (più rapido, dominio personalizzabile)

1. https://app.netlify.com → "Add new site" → "Import from Git" → GitHub
2. Seleziona la repo `coscienza`
3. Build command: vuoto (è un sito statico)
4. Publish directory: `/`

Netlify dà un URL `random-name.netlify.app` che puoi rinominare. Si
riconnette automaticamente a ogni `git push`.

## 4. Workflow tipico

```bash
# modifichi qualcosa
git add .
git commit -m "phase 1: brain regions scaffold"
git push
# il sito si aggiorna da solo
```

## .gitignore

Già incluso. Esclude:
- `.DS_Store` (macOS)
- `node_modules/` (per il futuro, se aggiungiamo un build step)
- `.env*` (per il futuro, se aggiungiamo API keys)
- `_local/` (cartella per esperimenti che non vuoi versionare)
