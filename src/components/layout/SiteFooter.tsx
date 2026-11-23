import { Eye } from 'lucide-react';
export default function SiteFooter() {
 return <><footer className="site-footer"><a href="#home" className="footer-brand">G<span>.</span></a><span>DESIGNED TO GROW. BUILT TO LEARN.</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} GAYATHRI S</small></footer><a className="resume-float" href="#resume"><Eye size={16} /> <span>View Resume</span></a></>;
}
