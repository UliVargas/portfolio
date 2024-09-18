type Theme = 'light' | 'dark';

function setTheme(theme: Theme): void {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme(): void {
  const currentTheme = localStorage.getItem('theme') as Theme || 'light';
  const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('theme') as Theme | null;
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const initialTheme = getInitialTheme();
setTheme(initialTheme);

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
} else {
  console.warn('Theme toggle button not found');
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function handleMediaQueryChange(e: MediaQueryListEvent): void {
  const newTheme: Theme = e.matches ? 'dark' : 'light';
  setTheme(newTheme);
}

mediaQuery.addEventListener('change', handleMediaQueryChange);

function cleanup(): void {
  mediaQuery.removeEventListener('change', handleMediaQueryChange);
  themeToggle?.removeEventListener('click', toggleTheme);
}

export { setTheme, toggleTheme, cleanup };