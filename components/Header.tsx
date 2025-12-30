import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';

export const SolanaLogoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 397 311" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1L333.1 73.8c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7 7 4.6-11.1l-62.7-62.7z" fill="currentColor"/>
  </svg>
);

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 solana-gradient rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-transform group-hover:scale-110">
            <SolanaLogoIcon className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-white bg-clip-text text-transparent">SOLSTAKE</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#tiers" className="hover:text-white transition-colors">Tiers</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://chainhub.digital/solstake/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 solana-gradient text-white hover:opacity-90 shadow-[0_0_15px_rgba(20,241,149,0.2)]"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </a>
        </div>
      </div>
    </header>
  );
};