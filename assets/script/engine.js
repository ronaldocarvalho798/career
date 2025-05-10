const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // se quiser animar só uma vez
    }
  });
});

const elementsToObserve = document.querySelectorAll('.description-section, .span-number, .section-description');
elementsToObserve.forEach(el => observer.observe(el));

