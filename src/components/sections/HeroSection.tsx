import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import CinematicScene from '../CinematicScene';

type HeroSectionProps = {
  introComplete: boolean;
};

const hidden = { opacity: 0, y: 22 };
const visible = { opacity: 1, y: 0 };

export default function HeroSection({ introComplete }: HeroSectionProps) {
  return (
    <>
      <section className={`hero${introComplete ? ' hero--active' : ' hero--waiting'}`} id="home">
        <div className="hero-grid" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        {/* The WebGL scene is mounted only after the intro has finished. */}
        {introComplete && <CinematicScene />}

        <div className="hero-content">
          <motion.div
            className="availability"
            initial={hidden}
            animate={introComplete ? visible : hidden}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <span className="pulse-dot" /> OPEN TO JAVA & DATA ANALYST OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            CODE WITH PURPOSE. THINK IN DATA.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 42, filter: 'blur(12px)' }}
            animate={introComplete
              ? { opacity: 1, y: 0, filter: 'blur(0px)' }
              : { opacity: 0, y: 42, filter: 'blur(12px)' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            GAYATHRI <span>S</span><b className="hero-period">.</b>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, x: -16 }}
            animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.65, delay: 0.48 }}
          >
            <span>JAVA DEVELOPER</span><i /><span>ASPIRING DATA ANALYST</span>
          </motion.div>

          <motion.p
            className="hero-copy"
            initial={{ opacity: 0, y: 14 }}
            animate={introComplete ? visible : { opacity: 0, y: 14 }}
            transition={{ duration: 0.65, delay: 0.58 }}
          >
            Passionate about building efficient applications and transforming data into meaningful insights.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={introComplete ? visible : { opacity: 0, y: 14 }}
            transition={{ duration: 0.65, delay: 0.7 }}
          >
            <a className="button button-primary" href="#projects">
              Explore My Work <ArrowUpRight size={17} />
            </a>
            <a className="button button-ghost" href="#contact">
              Talk With Me <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.88 }}
          >
            <span>BASED IN COIMBATORE, INDIA</span>
            <span>SCROLL TO EXPLORE <ArrowDown size={13} /></span>
          </motion.div>
        </div>

        <motion.div
          className="portrait-frame"
          initial={{ opacity: 0, x: 90, scale: 0.82, filter: 'blur(14px)' }}
          animate={introComplete
            ? { opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }
            : { opacity: 0, x: 90, scale: 0.82, filter: 'blur(14px)' }}
          transition={{ duration: 1.35, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="portrait-orbit orbit-a"
            initial={{ rotate: -38, scale: 0.72, opacity: 0 }}
            animate={introComplete ? { rotate: 0, scale: 1, opacity: 1 } : { rotate: -38, scale: 0.72, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.18, ease: 'easeOut' }}
          />
          <motion.div
            className="portrait-orbit orbit-b"
            initial={{ rotate: 52, scale: 0.7, opacity: 0 }}
            animate={introComplete ? { rotate: 21, scale: 1, opacity: 1 } : { rotate: 52, scale: 0.7, opacity: 0 }}
            transition={{ duration: 1.65, delay: 0.28, ease: 'easeOut' }}
          />
          <div className="portrait-image-wrap">
            <motion.img
              src="/images/gayathri-profile.jpeg"
              alt="Gayathri S professional portrait"
              initial={{ scale: 1.2, filter: 'brightness(.55) blur(8px)' }}
              animate={introComplete
                ? { scale: 1, filter: 'brightness(1) blur(0px)' }
                : { scale: 1.2, filter: 'brightness(.55) blur(8px)' }}
              transition={{ duration: 1.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="portrait-caption">
            <span>01 / THE PERSON</span>
            <strong>Curiosity meets<br />engineering.</strong>
          </div>
          <div className="portrait-corner" />
        </motion.div>

        <div className="hero-index">PORTFOLIO <span>—</span> 2026</div>
      </section>

      <section className="intro-strip">
        <div className="strip-track">
          <span>JAVA DEVELOPMENT</span><i>✳</i><span>DATA ANALYTICS</span><i>✳</i>
          <span>DATABASE THINKING</span><i>✳</i><span>JAVA DEVELOPMENT</span><i>✳</i>
          <span>DATA ANALYTICS</span><i>✳</i>
        </div>
      </section>
    </>
  );
}
