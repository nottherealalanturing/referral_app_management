document.addEventListener('DOMContentLoaded', () => {
  const openNavBtn = document.querySelector('.open-mobile-nav');
  const closeNavBtn = document.querySelector('.close-mobile-nav');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');

  openNavBtn.addEventListener('click', () => {
    mobileNavMenu.style.display = 'block';
  });

  closeNavBtn.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');
    });
  });
});
