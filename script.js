//hamburger
const hamburger = document.querySelector('#hamburger');
const navMen = document.querySelector('#nav-men');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMen.classList.toggle('hidden');
});

//navbar Fixed
window.onscroll = function(){
    const header =document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.scrollY > fixedNav){
      header.classList.add('navbar-fixed')          
  } else{
    header.classList.remove('navbar-fixed');
  }
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      const navbarHeight = document.querySelector('nav').offsetHeight;
      const offset = 5; // Jarak kecil yang ingin Anda tambahkan

      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight + offset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Untuk efek smooth scroll
      });
  });
});