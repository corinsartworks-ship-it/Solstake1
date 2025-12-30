import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),   // Heading Block Slides Up
      setTimeout(() => setStep(2), 1500),  // P1 from Right
      setTimeout(() => setStep(3), 1900),  // P2 from Left
      setTimeout(() => setStep(4), 2300),  // P3 from Bottom
      setTimeout(() => setStep(5), 2900),  // Button reveal
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const p1Text = "Solstake is a streamlined staking platform built on Solana’s high speed blockchain, allowing users to grow their SOL while helping secure and decentralize the network. By staking SOL, you support Solana’s Proof of Stake consensus and earn protocol generated rewards in return.";
  const p2Text = "Our tier based staking system offers flexible options for all users, with potential rewards of up to 50%, powered by Solana’s fast transactions and low fees. Rewards are paid directly to your connected wallet, fully verifiable on chain, and you always retain complete control of your assets.";
  const p3Text = "With automated instant payout and a simple user experience, Solstake makes staking SOL secure, transparent, and accessible. Start staking today and put your SOL to work.";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Heading Container */}
      <div 
        className={`relative z-10 text-center mb-16 px-6 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`
        }
      >
        <h1 
          className="text-5xl md:text-[6.5rem] font-black tracking-tighter max-w-6xl leading-[0.9] uppercase italic select-none"
        >
          <span className="text-mask inline-block">
            <span className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${step >= 1 ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: '200ms' }}>
              EARN WITH <span className="solana-text-gradient drop-shadow-[0_0_40px_rgba(153,69,255,0.3)]">SOLSTAKE</span>
            </span>
          </span>
          <br className="hidden md:block" />
          <span className="text-mask inline-block">
            <span className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${step >= 1 ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: '400ms' }}>
              WHILE SECURING THE
            </span>
          </span>
          <br className="hidden md:block" />
          <span className="text-mask inline-block">
            <span className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${step >= 1 ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: '600ms' }}>
              SOLANA NETWORK
            </span>
          </span>
        </h1>
      </div>
      
      {/* Subsequent Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <div className="space-y-8 mb-16 max-w-4xl flex flex-col items-center">
          {/* Paragraph 1 - From Right */}
          <p 
            className={`text-lg md:text-xl text-gray-400 leading-relaxed font-bold transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) max-w-3xl transform
              ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[80px]'}`}
          >
            {p1Text}
          </p>

          {/* Paragraph 2 - From Left */}
          <p 
            className={`text-lg md:text-xl text-gray-400 leading-relaxed font-bold transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) max-w-3xl transform
              ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[80px]'}`}
          >
            {p2Text}
          </p>

          {/* Paragraph 3 - From Bottom */}
          <p 
            className={`text-lg md:text-xl text-gray-200 leading-relaxed font-bold transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) max-w-3xl transform
              ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'}`}
          >
            {p3Text}
          </p>
        </div>

        {/* Action Button - Final Reveal */}
        <div className={`transition-all duration-[1200ms] cubic-bezier(0.16,1,0.3,1) transform ${step >= 5 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
          <a 
            href="https://chainhub.digital/solstake/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-16 py-6 solana-gradient text-white font-black text-lg uppercase tracking-[0.25em] rounded-full hover:opacity-90 hover:scale-105 transition-all shadow-[0_25px_60px_rgba(153,69,255,0.4)] flex items-center justify-center gap-3 group"
          >
            Start Earning Now
            <ChevronRight size={24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};