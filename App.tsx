import React, { useEffect, useCallback, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Tiers } from './components/Tiers';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import BackgroundBubbles from './components/BackgroundBubbles';

const App: React.FC = () => {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Effect for scroll direction detection
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;

      // Only update if scroll is significant to avoid flickers
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        ticking.current = false;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        document.body.classList.remove('scrolling-up');
      } else {
        document.body.classList.add('scrolling-up');
      }
      
      lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDir);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initObserver = useCallback(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -15% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        } else {
          entry.target.classList.remove('reveal-visible');
        }
      });
    }, observerOptions);

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach((el) => observer.observe(el));

    return observer;
  }, []);

  useEffect(() => {
    const observer = initObserver();
    return () => observer.disconnect();
  }, [initObserver]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-teal-500/30">
      <BackgroundBubbles />

      <Header />
      
      <main className="relative z-10 w-full">
        <Hero />
        
        <section id="tiers" className="py-32 px-6 max-w-7xl mx-auto w-full">
          <Tiers />
        </section>

        <section id="features" className="py-32 px-6 max-w-7xl mx-auto w-full">
          <Features />
        </section>

        <section id="how-it-works" className="py-32 px-6 max-w-7xl mx-auto w-full">
          <HowItWorks />
        </section>

        <section id="faq" className="py-32 px-6 max-w-4xl mx-auto w-full">
          <FAQ />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;