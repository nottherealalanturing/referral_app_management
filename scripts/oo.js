document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  const activePage = localStorage.getItem('activePage');

  if (activePage) {
    const activeLink = document.querySelector(
      `.nav-link[href="${activePage}"]`
    );
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navLinks.forEach((nav) => nav.classList.remove('active'));
      this.classList.add('active');
      localStorage.setItem('activePage', this.getAttribute('href'));
    });
  });
});
