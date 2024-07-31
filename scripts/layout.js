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
  const navLinks = document.querySelectorAll('.nav-link');

  const contentSection = document.querySelector('.content-section');

  const loadContent = async (page) => {
    try {
      const response = await fetch(`../pages/${page}.html`);
      if (response.ok) {
        const content = await response.text();

        contentSection.innerHTML = content;
      } else {
        contentSection.innerHTML = `<p>Error loading page: ${page}.html</p>`;
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      contentSection.innerHTML = '<p>Error fetching content.</p>';
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const page = link.getAttribute('href').substring(1);

      loadContent(page);
    });
  });

  loadContent('dashboard');
});

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');
    });
  });
});
