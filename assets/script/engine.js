const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // se quiser animar só uma vez
    }
  });
});

const elementsToObserve = document.querySelectorAll('.description-section, .contain, .section-description');
elementsToObserve.forEach(el => observer.observe(el));

window.addEventListener('scroll', function() {
  if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
    console.log("O scroll não está mais no topo da página!");
    document.querySelector('.header-bg ').classList.add('visib');
  } else {
    console.log("O scroll voltou para o topo.");
    document.querySelector('.header-bg ').classList.remove('visib'); // <---- Correção aqui
  }
});