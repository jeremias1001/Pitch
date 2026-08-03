(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const menuTrigger = document.querySelector('.mobile-trigger');
  menuTrigger?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    menuTrigger.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('.store-nav a').forEach((link) => link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuTrigger?.setAttribute('aria-expanded', 'false');
  }));

  const revealElements = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) revealElements.forEach((el) => el.classList.add('is-visible'));
  else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealElements.forEach((el) => revealObserver.observe(el));
  }

  const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
  const sections = [...document.querySelectorAll('.section-observe')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !entry.target.id) return;
        chapterLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.filter((section) => section.id).forEach((section) => sectionObserver.observe(section));
  }

  const timelineItems = [...document.querySelectorAll('.timeline-item')];
  const timelineProgress = document.querySelector('.timeline-rail span');
  const updateTimelineProgress = () => {
    const openIndex = Math.max(0, timelineItems.findIndex((item) => item.classList.contains('is-open')));
    if (timelineProgress) timelineProgress.style.height = `${((openIndex + 1) / timelineItems.length) * 100}%`;
  };
  timelineItems.forEach((item) => {
    const button = item.querySelector('.timeline-toggle');
    button?.addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('is-open');
      timelineItems.forEach((other) => {
        const active = other === item && shouldOpen;
        other.classList.toggle('is-open', active);
        other.querySelector('.timeline-toggle')?.setAttribute('aria-expanded', String(active));
        const panel = other.querySelector('.timeline-panel');
        if (panel) panel.hidden = !active;
      });
      updateTimelineProgress();
    });
  });
  updateTimelineProgress();

  const criteriaContent = {
    origen: ['01 · Parte utilizada','¿Qué parte del hongo declara la fórmula?','La información debe indicar con claridad la materia prima utilizada. En Shopify, este bloque puede enlazar directamente a la ficha y respaldo de cada producto.'],
    extraccion: ['02 · Método de extracción','¿Cómo se procesó el ingrediente?','El método debe explicarse de forma comprensible y asociarse al producto concreto. La transparencia convierte un concepto técnico en una decisión de compra informada.'],
    analisis: ['03 · Componentes declarados','¿Qué datos respaldan la composición?','Cuando existan análisis o concentraciones declaradas, la página puede mostrarlos y enlazarlos. Así la confianza proviene de información específica.']
  };
  const answer = document.querySelector('#criteria-answer');
  document.querySelectorAll('.criteria-tab').forEach((tab) => tab.addEventListener('click', () => {
    const content = criteriaContent[tab.dataset.tab];
    if (!content || !answer) return;
    document.querySelectorAll('.criteria-tab').forEach((other) => {
      const active = other === tab;
      other.classList.toggle('is-active', active);
      other.setAttribute('aria-selected', String(active));
    });
    answer.innerHTML = `<small>${content[0]}</small><h3>${content[1]}</h3><p>${content[2]}</p>`;
  }));

  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const track = carousel.querySelector('.review-track');
    const cards = [...carousel.querySelectorAll('.review-card')];
    const currentLabel = carousel.querySelector('[data-current]');
    let index = 0;
    const render = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      cards.forEach((card, cardIndex) => card.classList.toggle('is-current', cardIndex === index));
      if (currentLabel) currentLabel.textContent = String(index + 1).padStart(2, '0');
    };
    carousel.querySelector('[data-next]')?.addEventListener('click', () => { index = (index + 1) % cards.length; render(); });
    carousel.querySelector('[data-prev]')?.addEventListener('click', () => { index = (index - 1 + cards.length) % cards.length; render(); });
    render();
  }
})();
