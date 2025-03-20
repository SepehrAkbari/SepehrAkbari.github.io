document.getElementById('mode-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    const body = document.body;
    const toggle = this;
    
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      toggle.textContent = 'Lights Off';
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.add('dark-mode');
      toggle.textContent = 'Lights On';
      localStorage.setItem('theme', 'dark');
    }
  });
  
  window.addEventListener('load', function() {
    const toggle = document.getElementById('mode-toggle');
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      toggle.textContent = 'Lights On';
    } else {
      document.body.classList.remove('dark-mode');
      toggle.textContent = 'Lights Off';
    }
  });