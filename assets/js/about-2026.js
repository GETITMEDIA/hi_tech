/**
 * Hi-Tech Autozone — Modern About Page Interactions & Animations (2026)
 * - Live Eased Number Counting on Intersection
 * - Magnetic Hover Spotlight Glow on Cards
 * - Hardware-accelerated Scroll Reveal
 * - GLightbox Media Preview
 * - Smart Navbar Hide-on-Scroll
 */

(function () {
  'use strict';

  // 1. LIVE NUMBER ROLLING COUNTER WITH EASING
  function initLiveCounters() {
    const counterElements = document.querySelectorAll('.js-ab-counter');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            obs.unobserve(el);
            animateCounter(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counterElements.forEach((el) => observer.observe(el));

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = parseInt(el.getAttribute('data-duration'), 10) || 2000;
      const format = el.getAttribute('data-format') || ''; // 'comma' or ''
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease-out
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(ease * target);

        if (format === 'comma') {
          el.textContent = currentVal.toLocaleString();
        } else {
          el.textContent = currentVal;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = format === 'comma' ? target.toLocaleString() : target;
        }
      }

      requestAnimationFrame(update);
    }
  }

  // 2. MAGNETIC CURSOR SPOTLIGHT EFFECT
  function initSpotlightCards() {
    const cards = document.querySelectorAll('.ab-why-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 3. SCROLL FADE-IN OBSERVER
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.hz-reveal');
    if (!revealElements.length) return;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('hz-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hz-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px -30px 0px' }
    );

    const vh = window.innerHeight || 900;
    revealElements.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.94) {
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('hz-revealed')));
      } else {
        observer.observe(el);
      }
    });
  }

  // 4. WORKSHOP MEDIA LIGHTBOX
  function initMediaLightbox() {
    if (typeof GLightbox !== 'undefined') {
      GLightbox({
        selector: '.glightbox-about',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  }

  // Initialize all on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  function initAll() {
    initLiveCounters();
    initSpotlightCards();
    initScrollReveal();
    initMediaLightbox();
  }
})();
