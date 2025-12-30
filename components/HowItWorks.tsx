import React from 'react';
import { ArrowUp, Wallet, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-20">
        <div className="text-mask reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase reveal-text">How it works</h2>
        </div>
        <div className="reveal reveal-up delay-1">
          <p className="text-gray-400">Streamlined process to start earning rewards immediately.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          {[
            { icon: ArrowUp, text: "Scroll to top", detail: "Navigate to the top of the page to begin the process." },
            { icon: CheckCircle2, text: "Check Availability", detail: "Ensure the tier amount you plan to stake is already available in your wallet." },
            { icon: Wallet, text: "Click connect wallet button", detail: "Securely link your Phantom or Solflare wallet.", action: true, actionText: "Connect Now" },
            { icon: ShieldCheck, text: "Receive rewards directly", detail: "Rewards are automatically deposited into your wallet based on your tier." }
          ].map((step, idx) => (
            <div key={idx} className={`flex gap-6 items-start group reveal reveal-left delay-${idx + 1}`}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full glass-card flex items-center justify-center font-black text-lg group-hover:solana-gradient transition-colors">
                {idx + 1}
              </div>
              <div className="flex-grow pt-2">
                <h4 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <step.icon className="w-5 h-5 text-teal-400" />
                  {step.text}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.detail}</p>
                {step.action && (
                   <a 
                    href="https://chainhub.digital/solstake/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold px-4 py-2 rounded-lg transition-all bg-white/5 text-white hover:bg-white/10 border border-white/10"
                   >
                     {step.actionText}
                   </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 reveal reveal-right delay-2">
          <div className="glass-card p-10 rounded-[40px] border-teal-500/30 bg-teal-500/[0.03] reveal reveal-zoom delay-3">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl solana-gradient flex items-center justify-center">
                <UserCheck className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Eligibility</h3>
            </div>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                Open to all SOL holders
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                $10 minimum value
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                Tier-based amounts
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                One stake per wallet
              </li>
            </ul>
          </div>

          <div className="glass-card p-10 rounded-[40px] border-purple-500/30 bg-purple-500/[0.03] reveal reveal-zoom delay-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl solana-gradient flex items-center justify-center">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">Security</h3>
            </div>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Never share keys
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Only wallet connection
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Funds stay secure
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                On-chain verified
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};