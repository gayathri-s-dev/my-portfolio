import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
export default function SkillPanel({ title, description, icon, skills, tone }: { title: string; description: string; icon: ReactNode; skills: string[]; tone: string }) {
 return <article className={`skill-panel ${tone}`}><div className="skill-panel-head"><span className="skill-icon">{icon}</span><div><h3>{title}</h3><p>{description}</p></div></div><div className="skill-list">{skills.map((skill, i) => <motion.span key={skill} className="skill-chip" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(i * 0.035, 0.4) }}>{skill}</motion.span>)}</div></article>;
}
