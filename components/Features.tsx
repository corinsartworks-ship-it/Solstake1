import React from 'react';
import { Cpu, ShieldCheck, Zap, Globe, Lock, Clock } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delayClass }: { icon: any, title: string, description: string, delayClass: string }) => (
  <div className={`p-10 glass-card rounded-[40px] transition-all duration-500 reveal reveal-up ${delayClass}`}>
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
      <Icon className="w-7 h-7 text-teal-400" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <div className="text-mask reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-6 reveal-text">WHY CHOOSE <span className="solana-text-gradient">SOLSTAKE</span></h2>
        </div>
        <div className="reveal reveal-up delay-1">
          <p className="text-gray-400 max-w-2xl mx-auto">Industry-leading infrastructure built for the next generation of finance.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureItem 
          icon={Zap}
          title="Instant Payouts"
          description="Rewards are calculated in real-time and distributed to your wallet automatically. No manual claims required."
          delayClass="delay-1"
        />
        <FeatureItem 
          icon={ShieldCheck}
          title="Maximum Security"
          description="Your assets never leave your control. We use audited protocol-level smart contracts for all staking operations."
          delayClass="delay-2"
        />
        <FeatureItem 
          icon={Clock}
          title="High Performance"
          description="Built on Solana's lightning-fast network. Experience transaction finality in milliseconds."
          delayClass="delay-3"
        />
      </div>
    </div>
  );
};