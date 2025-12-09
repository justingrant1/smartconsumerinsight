import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-3xl font-black text-gray-900 tracking-tight">
              Smart<span className="text-green-600">Consumer</span><span className="text-gray-900">Insight</span>
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/digitizing" 
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Digitizing
            </Link>
            <Link 
              href="/housing" 
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Housing
            </Link>
            <Link 
              href="/baby-names" 
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold text-base"
            >
              Baby Names
            </Link>
            <Link 
              href="/ai-marketing" 
              className="text-gray-700 hover:text-green-600 transition-colors font-semibold text-base"
            >
              AI Marketing
            </Link>
          </nav>

          {/* Mobile menu button (future implementation) */}
          <button className="md:hidden p-2 text-gray-700 hover:text-green-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
