import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  activeSection: string;
}

const navItems = [
  { name: 'About', href: '#identity' },
  { name: 'Projects', href: '#projects' },
  { name: 'Events', href: '#events' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Alumni', href: '#alumni' },
  { name: 'Achievements', href: '#achievements' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06070a]/85 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* FIST Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <img
              src="/fist-logo.jpg"
              alt="FIST Crest"
              className="w-8 h-8 object-contain rounded-full border border-purple-500/40 group-hover:border-purple-400 transition-colors shadow-[0_0_12px_rgba(168,85,247,0.35)]"
            />
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-2">
                <span className="font-display font-extrabold text-base tracking-wider text-white">
                  FIST
                </span>
                <span className="h-3 w-[1px] bg-white/20" />
                <span className="font-sans text-xs text-slate-300 font-medium tracking-wide">
                  Dept. of CSE
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-3">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-sans font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-white font-semibold bg-purple-950/60 border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.2)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            <div className="h-4 w-[1px] bg-white/10" />

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu trigger and Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#0c0e15] border border-white/[0.08] space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-3 py-2 rounded text-xs font-sans font-medium tracking-wide text-slate-300 hover:text-white hover:bg-white/[0.04]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
