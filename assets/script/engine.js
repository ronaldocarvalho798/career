const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // se quiser animar só uma vez
    }
  });
});

document.querySelectorAll('.description-section').forEach(el => observer.observe(el));

console.log('Olá')