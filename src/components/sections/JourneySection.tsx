import { GraduationCap } from 'lucide-react';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';
import { education } from '../../data/portfolio';
export default function JourneySection() { return <>
      <section className="section journey-section" id="journey"><div className="section-shell journey-layout"><div><Reveal><SectionHeading eyebrow="THE FOUNDATION" title="Learning is" accent="a journey." /><p className="section-intro">A growing academic foundation in computing, supported by curiosity and a commitment to keep learning.</p><div className="education-stat"><GraduationCap /><div><strong>8.5 / 10</strong><span>BACHELOR'S CGPA</span></div></div></Reveal></div><div className="timeline">{education.map((item, i) => <Reveal key={item.title} delay={i * 0.08}><div className="timeline-item"><div className="timeline-marker"><span /></div><div className="timeline-content"><span className="timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.place}</p><small>{item.note}</small></div></div></Reveal>)}</div></div></section>


</>; }
