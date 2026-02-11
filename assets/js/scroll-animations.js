/**
 * Scroll Animations and Mobile Menu
 * Handles scroll-triggered animations and responsive mobile menu
 */

// Initialize scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply observer to all scroll-animate elements
  document.querySelectorAll('.scroll-animate, .scroll-animate-scale, .scroll-animate-left, .scroll-animate-right').forEach(el => {
    observer.observe(el);
  });
}


// Add auto scroll animations to common elements
function autoApplyScrollAnimations() {
  // Apply to cards
  document.querySelectorAll('.card').forEach((el, index) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate');
      el.style.transitionDelay = (index * 0.1) + 's';
    }
  });

  // Apply to school cards
  document.querySelectorAll('.school-card').forEach((el, index) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate-scale');
      el.style.transitionDelay = (index * 0.1) + 's';
    }
  });

  // Apply to finalist cards
  document.querySelectorAll('.finalist-card').forEach((el, index) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate');
      el.style.transitionDelay = (index * 0.1) + 's';
    }
  });

  // Apply to table rows
  document.querySelectorAll('table tbody tr').forEach((el, index) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate');
      el.style.transitionDelay = (index * 0.05) + 's';
    }
  });

  // Apply to sections
  document.querySelectorAll('section').forEach((el, index) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate');
      el.style.transitionDelay = (index * 0.1) + 's';
    }
  });

  // Apply to illustration cards
  document.querySelectorAll('.illustration-card').forEach((el, index) => {
    if (!el.classList.contains('scroll-animate')) {
      el.classList.add('scroll-animate-scale');
      el.style.transitionDelay = (index * 0.1) + 's';
    }
  });
}

// Initialize all functionality
function initScrollFeaturesOnReady() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      autoApplyScrollAnimations();
      initScrollAnimations();
    });
  } else {
    autoApplyScrollAnimations();
    initScrollAnimations();
  }
}

// Start initialization
initScrollFeaturesOnReady();

// Re-apply animations to dynamically added content
const mutationObserver = new MutationObserver(() => {
  const newElements = document.querySelectorAll('.card:not(.scroll-animate), .school-card:not(.scroll-animate-scale), .finalist-card:not(.scroll-animate)');
  if (newElements.length > 0) {
    autoApplyScrollAnimations();
    initScrollAnimations();
  }
});

mutationObserver.observe(document.body, { childList: true, subtree: true });
