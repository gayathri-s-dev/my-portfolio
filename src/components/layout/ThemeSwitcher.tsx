import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';
const themes = [
 { id: 'ocean', label: 'Ocean blue' },
 { id: 'violet', label: 'Electric violet' },
 { id: 'emerald', label: 'Emerald' },
 { id: 'sunset', label: 'Sunset amber' },
] as const;
type Theme = typeof themes[number]['id'];
export default function ThemeSwitcher() {
 const [theme, setTheme] = useState<Theme>('ocean');
 useEffect(() => {
  const saved = window.localStorage.getItem('gayathri-portfolio-theme') as Theme | null;
  if (saved && themes.some(item => item.id === saved)) setTheme(saved);
 }, []);
 useEffect(() => {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem('gayathri-portfolio-theme', theme);
 }, [theme]);
 return <label className="theme-switcher" title="Change portfolio color theme">
  <Palette size={14} aria-hidden="true" />
  <span className="sr-only">Color theme</span>
  <select aria-label="Choose color theme" value={theme} onChange={event => setTheme(event.target.value as Theme)}>
   {themes.map(item => <option value={item.id} key={item.id}>{item.label}</option>)}
  </select>
 </label>;
}
