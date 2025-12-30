import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string, answer: React.ReactNode, delayClass: string }> = ({ question, answer, delayClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-4 reveal reveal-up ${delayClass}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 rounded-2xl glass-card flex justify-between items-center gap-4 group transition-all duration-300 ${
          isOpen 
          ? 'bg-white/[0.08] border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
          : 'hover:bg-white/[0.05]'
        }`}
      >
        <span className={`font-bold text-lg transition-colors duration-300 uppercase tracking-tight ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-teal-500/20 text-teal-400 rotate-180' : 'bg-white/5 text-gray-500 group-hover:text-white'}`}>
          <ChevronDown className="w-5 h-5 flex-shrink-0" />
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 translate-y-0' : 'grid-rows-[0fr] opacity-0 translate-y-[-10px] pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 leading-relaxed text-base italic">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "WHAT IS SOLSTAKE?",
      answer: "Solstake is a Solana-based staking platform that allows users to stake SOL while helping secure and decentralize the Solana network. By participating, users earn protocol-generated rewards for supporting Solana’s Proof of Stake consensus."
    },
    {
      question: "HOW DOES STAKING ON SOLSTAKE WORK?",
      answer: "When you stake SOL on Solstake, your tokens are delegated to validators that help process transactions and maintain network security. In return for contributing to the network, you earn staking rewards based on your selected tier and network conditions."
    },
    {
      question: "DO I KEEP CONTROL OF MY SOL?",
      answer: "Yes. You always maintain full custody of your assets. Solstake never takes ownership of your SOL, never requests private keys, and never has direct access to your wallet funds."
    },
    {
      question: "HOW ARE REWARDS PAID?",
      answer: "All staking rewards are paid directly to your connected wallet. Rewards are distributed automatically and are fully verifiable on-chain."
    },
    {
      question: "HOW MUCH CAN I EARN?",
      answer: "Earnings depend on your selected staking tier. Depending on participation and tier selection, users may earn rewards of up to 50%."
    },
    {
      question: "IS THERE A LOCK UP PERIOD?",
      answer: (
        <div className="space-y-4">
          <p>Yes. Solstake offers optional lock up tiers designed to optimize reward distribution:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span className="text-white font-semibold">10 days</span> lock up for the 10% tier
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-white font-semibold">4 days</span> lock up for the 25% tier
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-white font-semibold">2 days</span> lock up for the 50% tier
            </li>
          </ul>
          <p className="pt-2 text-sm italic border-t border-white/10">Even when using a lock up tier, users are still allowed to stop staking or withdraw at any time. Withdrawing before the selected lock up period ends may reduce or forfeit rewards for that cycle, but your principal always remains accessible.</p>
        </div>
      )
    },
    {
      question: "ARE PAYOUTS INSTANT?",
      answer: "Yes. Solstake supports automated instant Payout, allowing users to access their funds without manual processing, subject to network conditions."
    },
    {
      question: "IS THERE A FORCED LOCK UP?",
      answer: "No. Lock up tiers are optional and only apply if you choose a specific reward tier. Users remain in control of their staking preferences at all times."
    },
    {
      question: "IS SOLSTAKE SECURE?",
      answer: "Security and transparency are core to Solstake. All transactions are recorded on-chain, staking logic operates through transparent smart contracts, and users can independently verify all activity on the Solana blockchain."
    },
    {
      question: "DO YOU NEED TECHNICAL KNOWLEDGE TO STAKE?",
      answer: "No. Solstake is designed to be intuitive and beginner friendly. If you can connect a Solana wallet, you can stake."
    },
    {
      question: "WHICH WALLETS ARE SUPPORTED?",
      answer: "Solstake supports major Solana-compatible wallets such as Phantom and Solflare. Additional wallet support may be added over time."
    },
    {
      question: "HOW DO I GET STARTED?",
      answer: "Simply ensure the tier amount you plan to stake is already available in your wallet. Choose your staking tier and connect your Solana wallet. Your staking activity and rewards can be tracked directly on-chain."
    }
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-12">
        <div className="reveal reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
            Support
          </div>
        </div>
        <div className="text-mask reveal delay-1">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight reveal-text">
            Frequently Asked <span className="solana-text-gradient">Questions</span>
          </h2>
        </div>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx} 
            question={faq.question} 
            answer={faq.answer} 
            delayClass={`delay-${(idx % 5) + 1}`}
          />
        ))}
      </div>
    </div>
  );
};