import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';
import ContactForm from '../ContactForm';
import { profileLinks } from '../../config';
export default function ContactSection() { return <>
      <section className="section contact-section" id="contact"><div className="section-shell"><Reveal><SectionHeading eyebrow="START A CONVERSATION" title="Let's connect." accent="Talk with me." /><p className="section-intro">Have an opportunity, a project idea or just want to say hello? I’d be happy to hear from you.</p></Reveal><div className="contact-layout"><Reveal className="contact-aside"><div className="contact-big-text">GOOD<br /><em>THINGS</em><br />START WITH<br />A HELLO<span>.</span></div><p>For Java Developer and Data Analyst opportunities, collaborations or professional enquiries.</p><a className="email-link" href="mailto:gayathrisekar.official@gmail.com"><Mail size={17} /> gayathrisekar.official@gmail.com <ArrowUpRight size={15} /></a><div className="social-links">{profileLinks.linkedIn ? <a href={profileLinks.linkedIn} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a> : <span><Linkedin size={17} /> LinkedIn URL not supplied</span>}{profileLinks.github ? <a href={profileLinks.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a> : <span><Github size={17} /> GitHub URL not supplied</span>}</div></Reveal><Reveal delay={0.12}><div className="contact-form-wrap"><div className="form-topline"><span>YOUR MESSAGE</span><span><i /> REPLIES WELCOME</span></div><ContactForm /></div></Reveal></div></div></section>

</>; }
