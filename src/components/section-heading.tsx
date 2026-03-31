export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className='border-b py-2 mb-2'>
      <h2 className='font-bold uppercase tracking-widest text-card-foreground'>
        {children}
      </h2>
    </div>
  );
}
