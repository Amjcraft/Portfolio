---
name: react-refactor
description: React component refactoring guide. Use when breaking down large components, improving component structure, applying composition patterns, or reviewing code for cleanliness. Emphasizes single-responsibility, composability, and React 19 idioms.
---

# React Component Refactoring

One component, one job. Composition over monoliths.

<when_to_use>

- A component file is doing too many things
- JSX is deeply nested or hard to scan
- Logic and presentation are tangled together
- State is duplicated or prop-drilled through multiple layers
- A single file is growing beyond ~150 lines
- Reviewing code for structural improvements

NOT for: performance optimization (see react-dev skill), styling changes only

</when_to_use>

<decomposition_rules>

**The single-responsibility test** — if you can't describe a component in one short phrase without using "and", split it.

**Line budget** — a component file over ~150 lines is a signal. Not a hard rule, but worth questioning.

**Nesting depth** — more than 3 levels of JSX nesting inside a single component is a smell. Extract the inner structure.

**Split along these boundaries:**

| Boundary | Extract when... |
|---|---|
| Data / display | Component fetches AND renders |
| List / item | Component renders a list AND defines the item |
| Container / content | Component handles layout AND business logic |
| Stateful / stateless | Pure presentation can be separated from state |
| Repeated structure | Same JSX block appears 2+ times |

</decomposition_rules>

<composition_patterns>

**Prefer composition over configuration.** Pass children or render props instead of a growing list of boolean flags.

```tsx
// AVOID — flag explosion
<Card showHeader showFooter showBorder collapsible title="..." subtitle="...">
  {content}
</Card>

// PREFER — composable parts
<Card>
  <CardHeader>
    <CardTitle>...</CardTitle>
    <CardDescription>...</CardDescription>
  </CardHeader>
  <CardContent>{content}</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

**Slot pattern** — accept `ReactNode` for flexible injection points:

```tsx
type SectionProps = {
  heading: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
};

function Section({ heading, meta, children }: SectionProps) {
  return (
    <section>
      <div className="flex items-baseline justify-between">
        {heading}
        {meta}
      </div>
      {children}
    </section>
  );
}
```

**Compound components** — co-located subcomponents that share context naturally:

```tsx
// ExperienceItem.tsx
export function ExperienceItem({ children }: { children: React.ReactNode }) {
  return <article className="group relative">{children}</article>;
}

ExperienceItem.Period = function Period({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-muted-foreground uppercase">{children}</p>;
};

ExperienceItem.Role = function Role({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-card-foreground">{children}</h3>;
};

// Usage
<ExperienceItem>
  <ExperienceItem.Period>2023 — 2025</ExperienceItem.Period>
  <ExperienceItem.Role>Senior Frontend Engineer</ExperienceItem.Role>
</ExperienceItem>
```

</composition_patterns>

<extracting_logic>

**Custom hooks for stateful logic.** If a component has more than one `useState` or any `useEffect`, ask if that logic belongs in a hook.

```tsx
// BEFORE — logic buried in component
function ProjectsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const filtered = projects.filter(p => filter === 'all' || p.tag === filter);

  return (/* ... */);
}

// AFTER — logic extracted, component is pure presentation
function useProjectFilter(projects: Project[]) {
  const [filter, setFilter] = useState('all');
  const filtered = projects.filter(p => filter === 'all' || p.tag === filter);
  return { filter, setFilter, filtered };
}

function ProjectsSection() {
  const { filter, setFilter, filtered } = useProjectFilter(projects);
  return (/* ... */);
}
```

**Constants and data out of the component.** Static arrays and config objects defined inside a component re-create on every render for no reason.

```tsx
// AVOID
function Sidebar() {
  const NAV_ITEMS = [{ id: 'about', label: 'About' }, ...]; // recreated every render
}

// PREFER — module-level
const NAV_ITEMS = [{ id: 'about', label: 'About' }, ...];

function Sidebar() { /* uses NAV_ITEMS */ }
```

</extracting_logic>

<file_organization>

**One primary export per file.** Co-located subcomponents are fine if they're only used by the parent.

**Naming convention:**
- `experience-section.tsx` → `ExperienceSection` (default or named export)
- `experience-item.tsx` → `ExperienceItem` (if used elsewhere)
- `use-project-filter.ts` → `useProjectFilter`

**Folder structure for complex sections:**

```
src/components/
  experience/
    experience-section.tsx   ← main export
    experience-item.tsx      ← subcomponent (if reused)
    experience-data.ts       ← static data / types
```

Only introduce a folder when a single file genuinely can't hold the section cleanly. Don't over-organize.

</file_organization>

<react_19_idioms>

**ref as prop** — no `forwardRef` in React 19:

```tsx
type InputProps = { ref?: React.Ref<HTMLInputElement> } & React.ComponentPropsWithoutRef<'input'>;

function Input({ ref, ...props }: InputProps) {
  return <input ref={ref} {...props} />;
}
```

**Avoid redundant state.** Derive values during render instead of syncing with `useEffect`:

```tsx
// AVOID
const [fullName, setFullName] = useState('');
useEffect(() => setFullName(`${first} ${last}`), [first, last]);

// PREFER
const fullName = `${first} ${last}`;
```

**key prop to reset subtrees** — better than an Effect that clears state:

```tsx
// Reset form when userId changes — no Effect needed
<ProfileForm key={userId} userId={userId} />
```

</react_19_idioms>

<checklist>

Before finishing a refactor, verify:

- [ ] Each component has a single clear responsibility
- [ ] No component file exceeds ~150 lines without good reason
- [ ] Static data / config lives at module level, not inside components
- [ ] Stateful logic extracted to custom hooks where it makes sense
- [ ] No prop drilling beyond 2 levels (lift state or use context)
- [ ] No redundant state that could be derived during render
- [ ] Repeated JSX blocks extracted to a component
- [ ] `"use client"` only on components that actually need it

</checklist>

<references>

- [patterns.md](patterns.md) — composition examples: list/item split, container/content, shared state via context
- [react-dev SKILL.md](../react-dev/SKILL.md) — React 19 TypeScript patterns
- [react-useeffect SKILL.md](../react-useeffect/SKILL.md) — when to avoid useEffect

</references>
