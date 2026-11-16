# PML lernen

Private Lernseite für das Modul Produktionsmittel und -logistik: Lesekapitel, Karteikarten, Drag-and-drop-Übungen, Rechenaufgaben mit Zufallswerten und Probeprüfungen.

Reines HTML, CSS und JavaScript ohne Build-Schritt. Lokal reicht ein Doppelklick auf `index.html`.

## Veröffentlichen

1. Im Repository unter **Settings → Pages → Build and deployment → Source** einmalig **GitHub Actions** auswählen.
2. Auf `main` pushen. Der Workflow `.github/workflows/pages.yml` stellt die Seite bereit.

Die Vorlesungsskripte (PDF) sind über `.gitignore` ausgeschlossen und gehören nicht ins Repository.

## Inhalte pflegen

| Datei | Inhalt |
| --- | --- |
| `js/data-chapters.js`, `js/data-chapters2.js` | Lesekapitel |
| `js/data-cards.js` | Karteikarten `[Kapitel, Frage, Antwort]` |
| `js/data-questions.js` | Auswahlfragen, richtige Antworten beginnen mit `*` |
| `js/data-exercises.js` | Drag-and-drop-Übungen und Rechenaufgaben |

Der Lernstand liegt nur im Browser (`localStorage`).
