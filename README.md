# स्वराज्यवेध | SWARAJYAVEDH

A mobile-first Marathi digital reading experience for studying Chhatrapati Shivaji Maharaj and the era of Swarajya.

## Current scope

This repository is a static site hosted on GitHub Pages. It currently includes:

- A royal manuscript-style landing page that opens directly into the reader.
- A paginated Marathi opening sequence: why read this book, preface, Bhosale lineage, Jadhav lineage, Shahaji and Jijabai, the pre-Shivaji Deccan, and the opening chapter draft.
- A small searchable source catalogue with explicit limits on what has and has not been verified.
- A source-linked chronology. Disputed dates and year-level estimates are labeled; the chronology is not presented as a complete or fully authenticated timeline.

The opening sequence and Chapter 1 are editorial drafts. They are not a completed multi-volume history or a fully authenticated scholarly edition. Page-level references to primary records, cross-checks against the ShivVedh manuscript, and editorial review remain necessary before making that claim.

## Preview

Open `index.html` in a browser or serve this repository with any static HTTP server.

## Structure

- `index.html`: semantic Marathi content, reader shell, and navigation
- `completion.js`: reader entry flow, source-linked chronology, and bibliography links
- `styles.css`: legacy responsive stylesheet; most current site styling is embedded in `index.html`
- `script.js`: legacy navigation script; current route and reader behavior are embedded in `index.html`

## Editorial commitments

1. Research before narrative publication.
2. Distinguish documented records, interpretations, disputed traditions, and literary reconstruction.
3. Never invent archival evidence, quotations, or page references.
4. Preserve independent original prose and attribution.
5. Keep unresolved source disagreements visible until they are checked against the relevant editions.

The separate ShivVedh repository is not modified by this project.
