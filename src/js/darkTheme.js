
export let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#checkbox');

const enableDarkMode = () => {
  document.body.classList.add('darkmode'); 
  localStorage.setItem('darkMode', 'enabled'); 
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode'); 
  localStorage.setItem('darkMode', null); 
};


if (darkMode === 'enabled') {
  darkModeToggle.checked = true;
  enableDarkMode();
}


darkModeToggle.addEventListener('change', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
