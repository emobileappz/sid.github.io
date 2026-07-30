/**
 * Common JavaScript functionality for KSK Apps website
 * Optimized for performance with cached DOM queries and efficient event handling
 */

(function() {
  'use strict';
  
  // Cache DOM queries for better performance
  let smoothScrollLinks = null;
  let fadeInElements = null;
  let downloadButtons = null;
  
  /**
   * Initialize smooth scrolling for internal anchor links
   */
  function initSmoothScrolling() {
    smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    if (smoothScrollLinks.length === 0) return;
    
    smoothScrollLinks.forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  /**
   * Initialize intersection observer for fade-in animations
   * Optimized to disconnect observer after element becomes visible
   */
  function initFadeInAnimations() {
    fadeInElements = document.querySelectorAll('.fade-in-up');
    
    if (fadeInElements.length === 0) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          // Stop observing this element after it's animated (performance optimization)
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Set initial state and observe elements
    fadeInElements.forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }
  
  /**
   * Initialize download button loading states
   * Optimized to use textContent instead of innerHTML to avoid XSS and improve performance
   */
  function initDownloadButtons() {
    downloadButtons = document.querySelectorAll('.download-btn');
    
    if (downloadButtons.length === 0) return;
    
    downloadButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Only add loading state for external links
        const href = this.getAttribute('href');
        if (!href || href.startsWith('#') || href.endsWith('.html')) return;
        
        const originalText = this.textContent;
        const loadingSpan = document.createElement('span');
        loadingSpan.className = 'loading';
        
        // Clear button content and add loading indicator
        this.textContent = ' Opening...';
        this.insertBefore(loadingSpan, this.firstChild);
        
        // Reset after 2 seconds
        setTimeout(function() {
          this.textContent = originalText;
        }.bind(this), 2000);
      });
    });
  }
  
  /**
   * Initialize all functionality when DOM is ready
   */
  function init() {
    initSmoothScrolling();
    initFadeInAnimations();
    initDownloadButtons();
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready
    init();
  }
})();
