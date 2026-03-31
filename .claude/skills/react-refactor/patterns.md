# Refactoring Patterns — Deep Reference

## List / Item Split

The most common decomposition. The parent owns iteration; the child owns rendering one item.

```tsx
// BEFORE — monolith
function ExperienceSection() {
  return (
    <section>
      {jobs.map(job => (
        <div key={job.id} className="group relative grid grid-cols-[80px_1fr] gap-4">
          <p className="text-xs text-muted-foreground">{job.period}</p>
          <div>
            <h3>{job.title} · <span>{job.company}</span></h3>
            <p>{job.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.skills.map(skill => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// AFTER — split
function ExperienceSection() {
  return (
    <section>
      {jobs.map(job => <ExperienceItem key={job.id} job={job} />)}
    </section>
  );
}

function ExperienceItem({ job }: { job: Job }) {
  return (
    <div className="group relative grid grid-cols-[80px_1fr] gap-4">
      <p className="text-xs text-muted-foreground">{job.period}</p>
      <div>
        <h3>{job.title} · <span>{job.company}</span></h3>
        <p>{job.description}</p>
        <SkillList skills={job.skills} />
      </div>
    </div>
  );
}

function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {skills.map(skill => (
        <Badge key={skill} variant="secondary">{skill}</Badge>
      ))}
    </div>
  );
}
```

---

## Container / Content Split

Container owns layout and structure. Content owns the actual data rendering.

```tsx
// Container — layout only, no business logic
function SectionContainer({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      {children}
    </section>
  );
}

// Content — data rendering only, no layout concerns
function AboutContent() {
  return (
    <>
      <p className="text-sm leading-relaxed">...</p>
      <SkillList skills={SKILLS} />
    </>
  );
}

// Composed
function AboutSection() {
  return (
    <SectionContainer id="about">
      <AboutContent />
    </SectionContainer>
  );
}
```

---

## Shared State via Context (avoid prop drilling)

When state needs to cross more than 2 component levels, lift to context — not prop drilling.

```tsx
// context/active-section.tsx
type ActiveSectionCtx = {
  active: string | null;
  setActive: (id: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionCtx | null>(null);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <ActiveSectionContext value={{ active, setActive }}>
      {children}
    </ActiveSectionContext>
  );
}

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) throw new Error('useActiveSection outside ActiveSectionProvider');
  return ctx;
}
```

---

## Extracting a Controlled Sub-form

When a section of a form has its own internal state, extract it — keep the parent clean.

```tsx
// BEFORE — parent manages child's internal state
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState(0);

  return (/* all fields inline */);
}

// AFTER — MessageField owns its own concerns
function MessageField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Field>
      <FieldLabel>Message <span className="text-muted-foreground">({value.length}/500)</span></FieldLabel>
      <Textarea value={value} onChange={e => onChange(e.target.value)} maxLength={500} />
    </Field>
  );
}
```

---

## Static Data Extraction

Data defined inside a component is noise. Move it out.

```tsx
// experience-data.ts
export type Job = {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
};

export const JOBS: Job[] = [
  {
    id: 'ambassador-labs',
    period: 'Nov 2023 — Jul 2025',
    title: 'Senior Frontend Engineer',
    company: 'Ambassador Labs',
    description: '...',
    skills: ['React', 'TypeScript', 'GraphQL'],
  },
  // ...
];
```

```tsx
// experience-section.tsx — clean, no data clutter
import { JOBS } from './experience-data';

export function ExperienceSection() {
  return (
    <section id="experience">
      {JOBS.map(job => <ExperienceItem key={job.id} job={job} />)}
    </section>
  );
}
```
