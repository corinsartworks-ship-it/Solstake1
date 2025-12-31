import React, { useMemo } from 'react';

const BackgroundBubbles: React.FC = () => {
  const glitters = useMemo(() => {
    return Array.from({ length: 75 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${Math.random() * 5 + 5}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Star Glitters */}
      {glitters.map((glitter) => (
        <div
          key={glitter.id}
          className="absolute rounded-full bg-white animate-shimmer"
          style={{
            top: glitter.top,
            left: glitter.left,
            width: glitter.size,
            height: glitter.size,
            animationDelay: glitter.animationDelay,
            animationDuration: glitter.animationDuration,
          }}
        />
      ))}

      {/* Purple Aurora Effect */}
      <div 
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-purple-900/60 via-purple-700/30 to-transparent rounded-full blur-[200px] animate-aurora-1"
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-bl from-indigo-800/50 via-purple-600/20 to-transparent rounded-full blur-[180px] animate-aurora-2"
      />

      {/* Soft Ambient Glows (Static) */}
      <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-600/[0.08] blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-500/[0.08] blur-[120px] rounded-full" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
    </div>
  );
};

export default BackgroundBubbles;