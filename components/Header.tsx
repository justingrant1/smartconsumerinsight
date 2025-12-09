import Link from 'next/link';

export default function Header() {
  const navItems = [
    { label: 'Digitizing', href: '/digitizing/best-digitizing-services' },
    { label: 'Housing', href: '/housing/section-8-housing' },
    { label: 'Baby Names', href: '/baby-names/best-baby-name-generators' },
    { label: 'AI Marketing', href: '/ai-marketing/best-ai-marketing-agencies' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
            Smart<span className="text-emerald-500">Consumer</span>
            <span className="text-slate-900">Insight</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Placeholder for future mobile menu */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
          aria-label="Open navigation menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
