# Social Grind

Marketing landing site for **Social Grind**, a social media agency. Built with Next.js, TypeScript, and Tailwind CSS.

## Brand

| Token | Hex | Usage |
|-------|-----|--------|
| Brand Red | `#6B1D2A` | Primary, buttons, icons |
| Brand Dark | `#1D1D1D` | Body text |
| Brand Beige | `#DCCFC4` | Section backgrounds |
| Brand Cream | `#F6F2ED` | Page background |

**Typography:** Playfair Display (headings), Montserrat (body/UI), Great Vibes (script accent for “Grind”).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Structure

- `src/app/` — Layout, page, global styles, favicon
- `src/components/` — Header, Hero, sections, Footer
- `src/components/ui/` — Button, SectionHeading

Single-page layout with anchor navigation: Services, Portfolio, Contact.
