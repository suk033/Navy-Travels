# Navy Travels website

Static V1 marketing site for Navy Travels, based on the supplied institutional content. It presents the agency, services, destinations, trust credentials, and a client-side quote flow that prepares a WhatsApp message.

## Quick start

1. Open a terminal in this directory.
2. Run `python -m http.server 8000`.
3. Visit `http://localhost:8000`.

Opening `index.html` directly also works, but a local server better matches production behavior.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | Semantic page content and metadata |
| `styles.css` | Responsive layout, visual system, and accessibility states |
| `script.js` | Mobile navigation and client-side quote handoff |

## V1 boundaries

- The quote form does not store data or use a backend. It validates required fields and opens WhatsApp with a prepared message.
- Photography is loaded from Unsplash and fonts from Google Fonts. Replace these remote assets with approved, licensed local brand assets before a production launch if full asset control is required.
- Social URLs are based on the handles supplied in the source document. Confirm ownership and final profile URLs before publication.
- The textual logo is an original placeholder because no standalone brand asset was supplied.

## Publication

The site has no build step and can be published on GitHub Pages or any static host. If publishing manually, upload the three project files together and serve `index.html` from the site root.
