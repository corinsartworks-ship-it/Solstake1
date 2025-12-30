import React from 'react';
import { Sprout, Zap, Lock, ChevronRight, TrendingUp, ShieldCheck, Gem } from 'lucide-react';

interface TierProps {
  icon: React.ReactNode;
  name: string;
  stake: string;
  reward: string;
  description: string;
  lockup: string;
  colorClass: string;
  delayClass?: string;
  popular?: boolean;
}

const TierCard: React.FC<TierProps> = ({ icon, name, stake, reward, description, lockup, colorClass, delayClass, popular }) => (
  <div className={`group relative p-10 glass-card rounded-[40px] transition-all duration-500 reveal reveal-up ${delayClass} ${popular ? 'border-purple-500/30 bg-white/[0.04] shadow-2xl' : ''}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-purple-600 text-white text-[11px] font-bold uppercase tracking-[0.1em] rounded-full shadow-lg">
        Recommended
      </div>
    )}
    
    <div className="flex justify-between items-start mb-10">
      <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform duration-500`}>
        {icon}
      </div>
      <div className="text-right">
        <span className="text-3xl font-black text-white leading-none block">{reward}</span>
        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1 block">Daily Yield</span>
      </div>
    </div>
    
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black text-white tracking-tight">{stake}</span>
        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">SOL Equivalent</span>
      </div>
    </div>

    <div className="space-y-4 mb-10 pb-10 border-b border-white/5">
      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
        <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,241,149,0.5)]" />
        Instant Automated Payouts
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
        <Lock size={16} className="text-purple-400" />
        {lockup} Lock Period
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
        <ShieldCheck size={16} className="text-blue-400" />
        Priority Verification
      </div>
    </div>

    <p className="text-gray-500 text-sm leading-relaxed mb-10 min-h-[60px]">
      {description}
    </p>

    <a 
      href="https://chainhub.digital/solstake/"
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn ${popular ? 'solana-gradient text-white shadow-[0_10px_30px_rgba(153,69,255,0.2)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
      Stake Now
      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
    </a>
  </div>
);

export const Tiers: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-24">
        <div className="reveal reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/5 border border-teal-500/10 text-teal-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Investment Modules
          </div>
        </div>
        <div className="text-mask reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter reveal-text" style={{ transitionDelay: '200ms' }}>
            ELEVATE YOUR <span className="solana-text-gradient">SOL YIELD</span>
          </h2>
        </div>
        <div className="reveal reveal-up delay-2">
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our dynamic staking engine allows you to maximize returns through professional-grade validator infrastructure.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TierCard 
          icon={<Sprout size={32} strokeWidth={2.5} />}
          name="Starter"
          stake="$10-$99"
          reward="10%"
          lockup="10 Days"
          colorClass="bg-emerald-500"
          delayClass="delay-1"
          description="Perfect for individual stakers looking to explore the Solana ecosystem with reliable, steady growth."
        />
        <TierCard 
          icon={<Zap size={32} strokeWidth={2.5} />}
          name="Professional"
          stake="$100-$499"
          reward="25%"
          lockup="4 Days"
          colorClass="bg-indigo-600"
          delayClass="delay-2"
          popular={true}
          description="Our most popular tier, offering a significant yield boost with a high-performance commitment cycle."
        />
        <TierCard 
          icon={<Gem size={32} strokeWidth={2.5} />}
          name="Institutional"
          stake="$500-$1000"
          reward="50%"
          lockup="2 Days"
          colorClass="solana-gradient"
          delayClass="delay-3"
          description="Premium access for major liquidity providers. Features the highest priority payout and maximum theoretical yield."
        />
      </div>
    </div>
  );
};