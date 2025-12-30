import React from 'react';

// Fix: Making children optional to resolve the "missing children" error when using JSX children
const WalletLogo = ({ name, children, delayClass }: { name: string, children?: React.ReactNode, delayClass: string }) => (
  <div className={`flex flex-col items-center gap-4 group reveal reveal-up ${delayClass}`}>
    <div className="w-20 h-20 rounded-[24px] bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/30 group-hover:scale-110 group-hover:-translate-y-2 shadow-xl group-hover:shadow-white/5 relative overflow-hidden">
      {/* Gloss Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      {/* Show real original colors constantly */}
      <div className="w-12 h-12 flex items-center justify-center transition-all duration-500 opacity-100 scale-100">
        {children}
      </div>
    </div>
    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
      {name}
    </span>
  </div>
);

export const WalletEcosystem: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16 reveal reveal-up">
        <h3 className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Supported Wallets & Ecosystem</h3>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
          SECURELY CONNECT WITH <span className="solana-text-gradient">YOUR FAVORITE APPS</span>
        </h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-center">
        {/* Phantom */}
        <WalletLogo name="Phantom" delayClass="delay-1">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-125">
            {/* Background exactly as in user image */}
            <rect width="100" height="100" rx="20" fill="#AB9FF2" />
            {/* Standard Phantom Ghost Icon - No manual refinement, just the path */}
            <path d="M72.3 54c0-12.7-10.3-23-23-23s-23 10.3-23 23c0 7.3 3.4 13.8 8.8 18l.2.1v4.7c0 1.9 1.5 3.4 3.4 3.4h2.1c1.9 0 3.4-1.5 3.4-3.4v-.8c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v.8c0 1.9 1.5 3.4 3.4 3.4h2.1c1.9 0 3.4-1.5 3.4-3.4v-4.7l.2-.1c5.4-4.2 8.8-10.7 8.8-18z" fill="white" />
            {/* Eyes exactly matching position and size of the phantom brand */}
            <circle cx="56.3" cy="49" r="2.5" fill="#AB9FF2" />
            <circle cx="64" cy="49" r="2.5" fill="#AB9FF2" />
          </svg>
        </WalletLogo>

        {/* Solflare */}
        <WalletLogo name="Solflare" delayClass="delay-2">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#solflare_grad)" />
            <path d="M12 17L8 13L12 9L16 13L12 17Z" fill="white" />
            <defs>
              <linearGradient id="solflare_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FC814A" />
                <stop offset="1" stopColor="#F7B500" />
              </linearGradient>
            </defs>
          </svg>
        </WalletLogo>

        {/* Jupiter */}
        <WalletLogo name="Jupiter" delayClass="delay-3">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <circle cx="20" cy="20" r="18" fill="#13141E" />
            <path d="M20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8ZM20 10.4C25.3019 10.4 29.6 14.6981 29.6 20C29.6 25.3019 25.3019 29.6 20 29.6C14.6981 29.6 10.4 25.3019 10.4 20C10.4 14.6981 14.6981 10.4 20 10.4Z" fill="#C7F284" />
          </svg>
        </WalletLogo>

        {/* MetaMask */}
        <WalletLogo name="MetaMask" delayClass="delay-4">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M22 12.5l-2.1-3.6-2.5-1.1L12 5.5l-5.4 2.3-2.5 1.1-2.1 3.6.5 4.5 4.4 3 5.1 1.5 5.1-1.5 4.4-3 .5-4.5z" fill="#E2761B"/>
            <path d="M12 18.5l-5.1-1.5 4.1-1 1 .5 1-.5 4.1 1-5.1 1.5z" fill="#8C4D1C"/>
          </svg>
        </WalletLogo>

        {/* Backpack */}
        <WalletLogo name="Backpack" delayClass="delay-5">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <rect x="4" y="8" width="16" height="12" rx="2" fill="#E11D48" />
            <path d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8" stroke="#E11D48" strokeWidth="2" />
          </svg>
        </WalletLogo>

        {/* Trust */}
        <WalletLogo name="Trust" delayClass="delay-1">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="trust_shield_grad" x1="50" y1="10" x2="85" y2="90" gradientUnits="userSpaceOnUse">
                {/* Specific cyan to blue gradient from user's Trust image */}
                <stop offset="0%" stopColor="#00FFB2" />
                <stop offset="100%" stopColor="#0500FF" />
              </linearGradient>
            </defs>
            {/* Left half - solid vibrant blue */}
            <path d="M50 10 L15 28 V55 C15 75 50 90 50 90 V10 Z" fill="#0500FF" />
            {/* Right half - neon gradient */}
            <path d="M50 10 L85 28 V55 C85 75 50 90 50 90 V10 Z" fill="url(#trust_shield_grad)" />
          </svg>
        </WalletLogo>

        {/* Ctrl */}
        <WalletLogo name="Ctrl" delayClass="delay-2">
          <div className="bg-white rounded-full p-2 flex items-center justify-center font-black text-black text-xs leading-none">CTRL</div>
        </WalletLogo>

        {/* TokenPocket */}
        <WalletLogo name="TokenPocket" delayClass="delay-3">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <rect width="24" height="24" rx="6" fill="#2980B9" />
            <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H13V17H7V15Z" fill="white" />
          </svg>
        </WalletLogo>

        {/* Glow */}
        <WalletLogo name="Glow" delayClass="delay-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-200 blur-[2px] animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
        </WalletLogo>
      </div>
    </div>
  );
};
