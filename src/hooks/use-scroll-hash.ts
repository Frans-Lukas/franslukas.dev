import { useEffect, useRef } from 'react';

export function useScrollHash() {
  const sections = useRef<HTMLElement[]>([]);
  const isScrolling = useRef(false);

  useEffect(() => {
    // Get all sections with IDs
    sections.current = Array.from(document.querySelectorAll('section[id]'));

    const handleScroll = () => {
      if (isScrolling.current) return;

      // Find the section that's currently in view
      const currentSection = sections.current.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        const hash = currentSection.id;
        if (window.location.hash !== `#${hash}`) {
          // Update URL hash without scrolling
          window.history.replaceState(null, '', `#${hash}`);
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const hash = link.getAttribute('href')?.slice(1);
        if (hash) {
          const section = document.getElementById(hash);
          if (section) {
            isScrolling.current = true;
            section.scrollIntoView({ behavior: 'smooth' });
            
            // Reset scrolling flag after animation
            setTimeout(() => {
              isScrolling.current = false;
            }, 1000);
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Add click event listener for hash links
    document.addEventListener('click', handleClick);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);
} 