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
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contentSection = document.querySelector('.content-section');

  const loadContent = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const content = await response.text();
        contentSection.innerHTML = content;
        window.history.pushState({ url }, '', url);
        initializeInternalLinks();
      } else {
        contentSection.innerHTML = `<p>Error loading page: ${url}</p>`;
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      contentSection.innerHTML = '<p>Error fetching content.</p>';
    }
  };

  const handleNavigationClick = (event) => {
    event.preventDefault();
    const url = event.currentTarget.dataset.url;
    if (url) {
      loadContent(url);
    }
  };

  const initializeInternalLinks = () => {
    document.querySelectorAll('.internal-link').forEach((link) => {
      link.addEventListener('click', handleNavigationClick);
    });
  };

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', handleNavigationClick);
  });

  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.url) {
      loadContent(event.state.url);
    }
  });

  // Load the initial content
  const initialUrl = '../pages/dashboard.html';
  loadContent(initialUrl);
});
