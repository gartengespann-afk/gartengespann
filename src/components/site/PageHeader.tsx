export function PageHeader({ title }: { title: string }) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-8 md:py-14 mb-6 md:mb-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold px-4">{title}</h1>
    </div>
  );
}
