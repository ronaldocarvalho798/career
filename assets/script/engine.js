const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

const elementsToObserve = document.querySelectorAll('.description-section, .text-description, .card');
elementsToObserve.forEach(el => observer.observe(el));


const links = document.querySelectorAll('.menu-principal .link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

const iconMenu = document.querySelector('.iconMenu');
const menu = document.querySelector('.nav--mobile');


iconMenu.addEventListener('click', function () {
  iconMenu.classList.toggle('bi-list');
  iconMenu.classList.toggle('bi-x');
   if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});


window.addEventListener('scroll', function() {
  if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector('header').classList.add('overl');
    document.querySelector('.border-bottom').classList.add('visib');
  } else {
    document.querySelector('header').classList.remove('overl');
    document.querySelector('.border-bottom').classList.remove('visib');
  }
});


