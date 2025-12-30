import React from 'react';
import { Twitter, Github, Globe } from 'lucide-react';
import { SolanaLogoIcon } from './Header';

const TelegramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.53.26l.215-3.048 5.548-5.012c.24-.213-.054-.334-.373-.121l-6.86 4.319-2.956-.924c-.642-.2-.656-.642.135-.95l11.552-4.45c.535-.195 1.002.124.869.946z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-16 px-6 relative overflow-hidden bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Telegram Support Section - Now on Top/Left */}
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <h4 className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.3em] text-center md:text-left">Official Channels</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://t.me/SoIstake" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-5 px-6 py-4 rounded-[2rem] hover:border-sky-500/50 hover:bg-white/[0.08] transition-all group border-white/10"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-inner">
                  <TelegramIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-black text-base uppercase tracking-tight">Technical Support</p>
                  <p className="text-gray-500 text-[10px] font-medium mt-0.5 leading-tight group-hover:text-gray-400 transition-colors">
                    Reach out to our customer support regarding any issues
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Logo and Tagline Section */}
          <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
             <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 solana-gradient rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <SolanaLogoIcon className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">SOLSTAKE</span>
            </div>
            <p className="solana-text-gradient font-black text-center md:text-right text-lg tracking-tight uppercase max-w-sm">
              Built on Solana • Transparent • Secure • Instant Rewards
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
              <Twitter className="text-gray-400 group-hover:text-white w-5 h-5 transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
              <Github className="text-gray-400 group-hover:text-white w-5 h-5 transition-colors" />
            </a>
            <a href="https://t.me/SoIstake" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
              <TelegramIcon className="text-gray-400 group-hover:text-sky-400 transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
              <Globe className="text-gray-400 group-hover:text-white w-5 h-5 transition-colors" />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-medium">
            © 2025 Solstake Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};