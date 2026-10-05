import React from 'react';

const quickLinks = [
  { name: 'Identity', href: '#identity' },
  { name: 'Projects', href: '#projects' },
  { name: 'Events', href: '#events' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Student Leadership', href: '#leadership' },
  { name: 'HOD & Faculty', href: '#faculty' },
  { name: 'Alumni Network', href: '#alumni' },
  { name: 'Student Achievements', href: '#achievements' },
];

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative bg-[#050608] text-white pt-16 pb-12 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Logo & Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-3">
              <img
                src="/fist-logo.jpg"
                alt="FIST Logo"
                className="w-9 h-9 object-contain rounded-full border border-purple-500/40"
              />
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  FIST <span className="text-purple-400">ASSOCIATION</span>
                </h3>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Fraternity of Immortal Software Technocrats
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Official student engineering guild of the Department of Computer Science & Engineering. 
              Empowering undergraduates to learn, architect, compete, and lead.
            </p>
          </div>

          {/* Useful Navigation Links */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block font-semibold">
              ASSOCIATION NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar without business contact CTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} FIST Association. Department of Computer Science & Engineering.
          </div>
          <div>
            Built by FIST Student Developers
          </div>
        </div>
      </div>
    </footer>
  );
};
