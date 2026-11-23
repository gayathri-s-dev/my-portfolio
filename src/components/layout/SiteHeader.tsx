import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '../../data/portfolio';
import ThemeSwitcher from './ThemeSwitcher';
export default function SiteHeader() {
 const [menuOpen, setMenuOpen] = useState(false);
 const closeMenu = () => setMenuOpen(false);
 return <header className="site-header"><a href="#home" className="brand" onClick={closeMenu}>G<span>.</span><small>GAYATHRI S</small></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}<ThemeSwitcher /><a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a></nav><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button></header>;
}
