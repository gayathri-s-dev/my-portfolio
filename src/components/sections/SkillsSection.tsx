import { BarChart3, Code2 } from 'lucide-react';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';
import SkillPanel from '../shared/SkillPanel';
import { analystSkills, javaSkills, tools } from '../../data/portfolio';
export default function SkillsSection() { return <>
      <section className="section skills-section" id="skills"><div className="section-shell"><Reveal><SectionHeading eyebrow="THE TOOLKIT" title="Skills with" accent="direction." /><p className="section-intro">Two paths, one problem-solving mindset. Explore the technical foundations I’m building across development and analytics.</p></Reveal><div className="skill-panels"><Reveal><SkillPanel title="Java Development" description="Building blocks for structured, maintainable applications." icon={<Code2 />} skills={javaSkills} tone="blue" /></Reveal><Reveal delay={0.12}><SkillPanel title="Data Analytics" description="Working with data to organize, query and interpret information." icon={<BarChart3 />} skills={analystSkills} tone="purple" /></Reveal></div><Reveal delay={0.1}><div className="tools-row"><div className="tools-label"><span className="eyebrow"><i /> TOOLS & TECHNOLOGIES</span><p>Everyday toolkit</p></div><div className="tool-chips">{tools.map(t => <span key={t}>{t}</span>)}</div></div></Reveal></div></section>


</>; }
