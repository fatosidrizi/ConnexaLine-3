// Intersection Observer for fade-up animations
// This improves performance by only animating elements when they're visible

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optionally unobserve after animation to improve performance
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Initialize animations on DOM ready
const initAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-fade-up');
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    // Skip animations, just make elements visible
    animatedElements.forEach(el => el.classList.add('is-visible'));
  } else {
    // Observe elements for intersection
    animatedElements.forEach(el => observer.observe(el));
  }
};

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Re-initialize on dynamic content changes (optional)
export { initAnimations };
