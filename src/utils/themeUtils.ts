export function setTheme(theme: 'light' | 'dark'): void {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

export function toggleTheme(): void {
  console.log('toggleTheme');
  
  const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

export function getInitialTheme(): 'light' | 'dark' {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as 'light' | 'dark';
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function initTheme(): void {
  const theme = getInitialTheme();
  setTheme(theme);
}

export function handleSystemThemeChange(e: MediaQueryListEvent): void {
  const newTheme = e.matches ? 'dark' : 'light';
  setTheme(newTheme);
}