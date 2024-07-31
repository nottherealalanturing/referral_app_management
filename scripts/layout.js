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
/* 
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
}); */

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');
    });
  });
});

/* document.addEventListener('DOMContentLoaded', () => {
  const contentSection = document.querySelector('.content-section');

  const loadContent = async (url) => {
    try {
    
      const response = await fetch(url);
      if (response.ok) {
        const content = await response.text();
        contentSection.innerHTML = content;
        window.history.pushState({ url }, '', url);
        initializeSubRoutes();
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
    const url = event.target.dataset.url || event.target.getAttribute('href');
    if (url) loadContent(url);
  };

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', handleNavigationClick);
  });

  function initializeSubRoutes() {
    document.querySelectorAll('.internal-link').forEach((link) => {
      link.addEventListener('click', handleNavigationClick);
    });
  }

  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.url) {
      loadContent(event.state.url);
    } else {
      loadContent('../pages/dashboard.html');
    }
  });

  const initialUrl =
    window.location.pathname.substring(1) || '../pages/dashboard.html';
  loadContent(initialUrl);
});
 */

document.addEventListener('DOMContentLoaded', () => {
  const contentSection = document.querySelector('.content-section');

  const loadContent = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const content = await response.text();
        contentSection.innerHTML = content;
        window.history.pushState({ url }, '', url);
        initializeInternalLinks(); // Initialize internal links after loading new content
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
