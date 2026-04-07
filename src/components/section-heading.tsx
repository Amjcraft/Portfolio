export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className='mb-8 border-l-2 border-primary pl-3 py-0.5'>
      <h2 className='text-xs font-bold uppercase tracking-widest text-card-foreground'>
        {children}
      </h2>
    </div>
  );
}
