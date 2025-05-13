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
    document.querySelector('.border-bottom').classList.add('visib');
    document.querySelector('.header-bg ').classList.add('visib');
  } else {
    document.querySelector('.border-bottom').classList.remove('visib');
    document.querySelector('.header-bg ').classList.remove('visib');
  }
});