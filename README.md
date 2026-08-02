# Krupa — Personal Website

A minimal, white personal site with a fixed left sidebar (photo, socials, and
navigation) and a scrollable content area on the right, inspired by your
reference screenshot but with baby-pink hover states, real navigation between
sections, and clickable project/article/art cards that open a detail view.

## Run it locally

1. Make sure you have [Node.js](https://nodejs.org) installed (v18+).
2. Open this folder in VS Code.
3. In the terminal:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL it prints (usually `http://localhost:5173`).

## Where to edit things

Everything you'll want to change lives near the top of **`src/App.jsx`**,
in a section clearly marked `1. EDIT THIS SECTION`:

- **`PROFILE`** — your greeting, tagline, and about-me paragraph.
- **`PROFILE.photo`** — swap `public/profile.jpg` for your own photo (same filename,
  or update the path here). A placeholder crop from your reference image is there now.
- **`SOCIAL_LINKS`** — update the `url` for GitHub, LinkedIn, and Substack to your
  real profile links. These are real `<a>` tags — clicking them opens the link
  in a new tab.
- **`NAV_ITEMS`** — the four buttons on the left (Projects, Articles, Art
  Portfolio, About Me). Reorder or rename here.
- **`PROJECTS` / `ARTICLES` / `ARTWORKS`** — each is a list of cards. Add,
  remove, or edit objects here:
  - `tag` — small label shown on the card (category)
  - `title` — card heading
  - `summary` — short teaser shown on the card
  - `details` — the full text shown when the card is clicked
  - `link` — optional external URL (e.g. your live GitHub repo, Substack post,
    or leave `''` if there isn't one)

Clicking a card doesn't leave the page — it swaps the right panel to a detail
view with a "← Back" button, so it behaves like a real navigation flow without
needing a router.

## How the navigation behaves

- Clicking **Projects / Articles / Art Portfolio** swaps the main panel to
  that section's grid of cards.
- Clicking a card swaps to that item's detail page.
- Clicking **About Me** takes you back to the home view and smooth-scrolls
  down to the About section, which also fades in automatically if you just
  scroll there yourself.
- Clicking your photo always brings you back to the top of the home page.

## Styling

All styling is plain CSS in `src/App.css` and `src/index.css` — no Tailwind or
build-step CSS tooling, so it's easy to tweak directly. Colors are defined as
CSS variables at the top of `App.css`:

```css
--pink-soft: #ffeaf2;  /* hover background */
--pink: #ffb0cb;       /* hover border/accent */
--pink-deep: #ec5f95;  /* hover text color */
```

Change those three values to adjust the hover color everywhere at once.

Fonts used: **Fredoka** (headings), **Space Mono** (nav/labels, for a
dev-friendly feel), and **Inter** (body text) — all loaded from Google Fonts
in `src/index.css`.
