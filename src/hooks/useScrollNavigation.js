import { useEffect, useRef } from 'react';

// The "System" Order (Home is excluded as requested)
const SECTION_ORDER = [
  'about', 
  'skills', 
  'projects', 
  'experience', 
  'resume', 
  'contact'
];

export const useScrollNavigation = (currentSection, onNavigate) => {
  const lastScrollTime = useRef(0);
  const SCROLL_COOLDOWN = 800; // ms to wait between scrolls (Prevents flickering)

  useEffect(() => {
    // 1. If we are on Home, DO NOT hijack scroll. Let it behave normally.
    if (currentSection === 'home') return;

    const handleWheel = (e) => {
      // 2. Prevent default browser scrolling (Stop the page from moving naturally)
      // This creates the "App-like" locked feel.
      // We only allow default scrolling if the user is inside a scrollable modal/box (future proofing)
      const isScrollableContent = e.target.closest('.scrollable-content');
      if (isScrollableContent) return; // Let them scroll the content, don't switch sections
      
      e.preventDefault();

      // 3. Debounce (Check Time)
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;

      // 4. Determine Direction
      // deltaY > 0 means scrolling DOWN
      // deltaY < 0 means scrolling UP
      const direction = e.deltaY > 0 ? 'next' : 'prev';
      
      // 5. Find Current Index
      const currentIndex = SECTION_ORDER.indexOf(currentSection);
      if (currentIndex === -1) return; // Should not happen if logic is tight

      // 6. Calculate Next Section
      let nextIndex = currentIndex;

      if (direction === 'next') {
        if (currentIndex < SECTION_ORDER.length - 1) {
          nextIndex = currentIndex + 1;
        }
      } else {
        if (currentIndex > 0) {
          nextIndex = currentIndex - 1;
        }
      }

      // 7. Navigate if changed
      if (nextIndex !== currentIndex) {
        lastScrollTime.current = now; // Reset timer
        onNavigate(SECTION_ORDER[nextIndex]);
      }
    };

    // Attach listener with { passive: false } to allow preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, onNavigate]);
};