export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row">
        <p>© 2026 Aqilah Razak. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
          <a href="#" className="transition-colors hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}