import { ArrowUpRight, Database, Sparkles } from 'lucide-react';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';
import { certifications } from '../../data/portfolio';
export default function RecognitionSection() { return <>
      <section className="section recognition-section"><div className="section-shell"><Reveal><SectionHeading eyebrow="MILESTONES" title="Knowledge in" accent="progress." /><p className="section-intro">Certifications and project work that reflect my ongoing learning.</p></Reveal><div className="recognition-grid"><Reveal><div className="achievement-card"><div className="achievement-symbol"><Database /></div><span className="eyebrow">PROJECT ACHIEVEMENT</span><h3>Designed a structured database for hotel bookings.</h3><p>Created a PostgreSQL database to manage hotel booking records, demonstrating SQL and database management skills.</p><span className="achievement-index">ACHIEVEMENT / 01</span></div></Reveal><Reveal delay={0.12}><div className="cert-card"><span className="eyebrow">CERTIFICATIONS</span>{certifications.map((cert, i) => <div className="cert-row" key={cert}><span>0{i + 1}</span><strong>{cert}</strong><ArrowUpRight size={16} /></div>)}<div className="cert-foot">CONTINUOUS LEARNING <Sparkles size={14} /></div></div></Reveal></div></div></section>


</>; }
