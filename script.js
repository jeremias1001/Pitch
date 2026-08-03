(() => {
  const menuButton = document.querySelector('.menu-button');
  menuButton?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.shop-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  }

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item) => {
    const button = item.querySelector('.timeline-toggle');
    const panel = item.querySelector('.timeline-panel');
    button?.addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('is-open');
      timelineItems.forEach((other) => {
        const active = other === item && shouldOpen;
        other.classList.toggle('is-open', active);
        other.querySelector('.timeline-toggle')?.setAttribute('aria-expanded', String(active));
        const otherPanel = other.querySelector('.timeline-panel');
        if (otherPanel) otherPanel.hidden = !active;
      });
      if (panel && shouldOpen) panel.hidden = false;
    });
  });
})();
