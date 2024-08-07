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
        handleScripts(contentSection);
      } else {
        contentSection.innerHTML = `<p>Error loading page: ${url}</p>`;
        console.log(url.substring(9));
        const content = await response.text();
        contentSection.innerHTML = content;
        window.history.pushState(
          { url: url.substring(9) },
          '',
          url.substring(9)
        );
        initializeInternalLinks();
        handleScripts(contentSection);
        //window.location.replace('/layout/index.html');
      }
    } catch (error) {
      window.location.replace('/layout/index.html');
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

  const handleScripts = (content) => {
    const scripts = content.querySelectorAll('script');
    scripts.forEach((script) => {
      const newScript = document.createElement('script');
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.body.appendChild(newScript).parentNode.removeChild(newScript);
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
