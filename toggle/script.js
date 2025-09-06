(function() {
  // Tabs and Panels
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const loginPanel = document.getElementById('loginPanel');
  const signupPanel = document.getElementById('signupPanel');

  // Accessibility helpers
  function activateTab(tabBtn, panelDiv) {
    // Tabs
    [loginTab, signupTab].forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('tabindex', '-1');
    });
    tabBtn.classList.add('active');
    tabBtn.setAttribute('aria-selected', 'true');
    tabBtn.setAttribute('tabindex', '0');
    tabBtn.focus();

    // Panels
    [loginPanel, signupPanel].forEach(panel => panel.classList.add('hidden'));
    panelDiv.classList.remove('hidden');
  }

  loginTab.addEventListener('click', () => activateTab(loginTab, loginPanel));
  signupTab.addEventListener('click', () => activateTab(signupTab, signupPanel));

  // Keyboard accessibility for tabs
  [loginTab, signupTab].forEach((tab, idx, arr) => {
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const nextIdx = (e.key === 'ArrowRight') ? (idx+1)%arr.length : (idx+arr.length-1)%arr.length;
        arr[nextIdx].click();
      }
    });
  });

  // Form submission handlers (replace with your API logic)
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value;
    // TODO: Replace with actual login API call
    alert(`Login attempted\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  });

  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;
    // TODO: Replace with actual signup API call
    alert(`Signup attempted\nName: ${name}\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  });

  // Set initial focus for accessibility
  window.addEventListener('DOMContentLoaded', () => {
    loginTab.focus();
  });
})();(function() {
  // Tabs and Panels
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const loginPanel = document.getElementById('loginPanel');
  const signupPanel = document.getElementById('signupPanel');

  // Accessibility helpers
  function activateTab(tabBtn, panelDiv) {
    // Tabs
    [loginTab, signupTab].forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('tabindex', '-1');
    });
    tabBtn.classList.add('active');
    tabBtn.setAttribute('aria-selected', 'true');
    tabBtn.setAttribute('tabindex', '0');
    tabBtn.focus();

    // Panels
    [loginPanel, signupPanel].forEach(panel => panel.classList.add('hidden'));
    panelDiv.classList.remove('hidden');
  }

  loginTab.addEventListener('click', () => activateTab(loginTab, loginPanel));
  signupTab.addEventListener('click', () => activateTab(signupTab, signupPanel));
  // Keyboard accessibility for tabs
  [loginTab, signupTab].forEach((tab, idx, arr) => {
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const nextIdx = (e.key === 'ArrowRight') ? (idx+1)%arr.length : (idx+arr.length-1)%arr.length;
        arr[nextIdx].click();
      }
    });
  });

  // Form submission handlers (replace with your API logic)
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.email.value.trim();
    const password = this.password.value;
    // TODO: Replace with actual login API call
    alert(`Login attempted\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  });

  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;
    // TODO: Replace with actual signup API call
    alert(`Signup attempted\nName: ${name}\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  });

  // Set initial focus for accessibility
  window.addEventListener('DOMContentLoaded', () => {
    loginTab.focus();
  });
})();
