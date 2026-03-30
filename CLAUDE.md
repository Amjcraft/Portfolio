# Portfolio — Claude Instructions

Aaron's personal portfolio site. Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, static (no DB, no auth).

## Component Library: mighty-ui (primary)

**Always reach for mighty-ui first.** Only build a custom component if mighty-ui genuinely doesn't cover the use case.

- Import from the `"mighty-ui"` barrel: `import { Button, Badge, Card, cn, ... } from "mighty-ui"`
- CSS: already imported in `globals.css` via `@import "mighty-ui/globals.css"`
- Full component API → `/Users/aaron/Projects/mighty-ui/docs/components.md`
- Composition patterns → `/Users/aaron/Projects/mighty-ui/docs/patterns.md`
- Design tokens → `/Users/aaron/Projects/mighty-ui/docs/foundations.md`

### Key components available
Atoms: `Button`, `Badge`, `Input`, `Textarea`, `Label`, `Checkbox`, `Switch`, `Avatar`, `Skeleton`, `Spinner`, `Separator`, `Toggle`, `ToggleGroup`
Layout: `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`), `Alert`, `Typography`, `Tabs`, `Table`, `ScrollArea`, `Collapsible`, `Empty`
Overlays: `Dialog`, `AlertDialog`, `Sheet`, `Drawer`, `DropdownMenu`, `Tooltip`, `Popover`, `Command`, `Select`, `Combobox`
Nav: `Breadcrumb`, `Pagination`
Feedback: `Sonner` (toasts via `import { toast } from "sonner"`)
Utils: `cn()`, `useMobile()`, `useStaticWidth()`, `withStaticWidth()`

### Button — most used
```tsx
<Button variant="link" asChild><a href="#section">Nav item</a></Button>
// variants: default | destructive | outline | secondary | ghost | link
// sizes: default | sm | lg | icon
```

### Typography
```tsx
<Typography variant="h2">Section</Typography>
// variants: h1 | h2 | h3 | h4 | lead | small | muted | link | default
```

### Badge (skill chips)
```tsx
<Badge variant="secondary">TypeScript</Badge>
// variants: default | secondary | destructive | outline | ghost | link
```

## Design Tokens (dark navy theme)

Defined in `src/app/globals.css` as overrides on mighty-ui's dark CSS vars.

| Token class | Use for |
|---|---|
| `text-card-foreground` | Headings, active/highlighted text |
| `text-foreground` | Body text, inactive nav |
| `text-muted-foreground` | Captions, dates, secondary info |
| `bg-background` | Page background |
| `bg-card` | Card/panel backgrounds |
| `text-primary` / `bg-primary` | Teal accent |
| `border-border` | Borders |

Never use hardcoded color values (e.g. `text-[#ccd6f6]`). Always use token classes.

## Architecture

```
src/
  app/
    layout.tsx        — html.dark, Geist fonts, global providers
    globals.css       — mighty-ui import + navy dark theme overrides
    page.tsx          — two-column layout (45/55 lg split)
  components/
    sidebar.tsx       — sticky left column, scroll-spy nav
    about-section.tsx
    experience-section.tsx
    projects-section.tsx
    icons.tsx         — custom SVG icons (GitHub, LinkedIn, TwitterX)
  hooks/
    use-scroll-spy.ts — IntersectionObserver active section tracking
```

## Client vs. Server Components

Any component that imports from the `"mighty-ui"` barrel **must be `"use client"`** — the barrel includes `next-themes` and `SidebarContext` (createContext) which fail in server rendering.

Server components are fine for pure layout/content with no mighty-ui barrel imports.

## Styling Rules

- Use `cn()` from `"mighty-ui"` for all className merging
- Tailwind v4: utility-first, no `tailwind.config.js` — config lives in CSS via `@theme`
- Responsive: mobile-first (`lg:` for the two-column switch)
- No hardcoded colors, spacing magic numbers, or raw hex/rgb values

## Icons

Use custom SVGs from `src/components/icons.tsx` for brand icons (GitHub, LinkedIn, TwitterX). Lucide React (`lucide-react`) for general UI icons — note: v1 removed brand icons.

## Skills Available

The following skill references are in `.claude/skills/`:

- **`react-refactor/`** — Component decomposition, composition over monoliths, extracting logic, file organization
- **`react-dev/`** — React 19 TypeScript patterns, hooks typing, component patterns
- **`react-useeffect/`** — When to use/avoid useEffect, alternatives
- **`nextjs/`** — Next.js 15 App Router: routing, data fetching, Server Actions, metadata
- **`tailwindcss/`** — Tailwind v4 patterns, configuration, component extraction

Consult the relevant skill reference before implementing non-trivial patterns.

## Dev Commands

```bash
pnpm dev       # next dev --turbopack
pnpm build     # next build
pnpm typecheck # tsc --noEmit
pnpm lint      # next lint
```
