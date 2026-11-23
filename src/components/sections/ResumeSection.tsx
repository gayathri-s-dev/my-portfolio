
import { useState } from 'react';

import {
  BarChart3,
  Code2,
  Download,
  Eye,
  FileText,
  ExternalLink,
} from 'lucide-react';

import Reveal from '../shared/Reveal';
import SectionHeading from '../shared/SectionHeading';

type ResumeType = 'java' | 'analyst';

const resumes = {
  java: {
    name: 'GAYATHRI — JAVA DEVELOPER RESUME',
    title: 'Gayathri Java Developer Resume',
    path: '/resumes/Gayathri-Java-Developer-Resume.pdf',
    filename: 'Gayathri-Java-Developer-Resume.pdf',
  },

  analyst: {
    name: 'GAYATHRI — DATA ANALYST RESUME',
    title: 'Gayathri Data Analyst Resume',
    path: '/resumes/Gayathri-Data-Analyst-Resume.pdf',
    filename: 'Gayathri-Data-Analyst-Resume.pdf',
  },
};

export default function ResumeSection() {
  const [activeResume, setActiveResume] =
    useState<ResumeType>('java');

  const selectedResume = resumes[activeResume];

  const handleResumeChange = (resume: ResumeType) => {
    setActiveResume(resume);
  };

  return (
    <section className="section resume-section" id="resume">
      <div className="section-shell">

        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="CAREER PROFILE"
            title="My resume."
            accent="Your next read."
          />

          <p className="section-intro">
            Explore the resume that matches the opportunity.
            View it here or download the PDF for later.
          </p>
        </Reveal>

        <Reveal delay={0.1}>

          {/* Resume Toolbar */}
          <div className="resume-toolbar">

            {/* Resume Tabs */}
            <div
              className="resume-tabs"
              role="tablist"
              aria-label="Choose resume"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeResume === 'java'}
                className={
                  activeResume === 'java' ? 'active' : ''
                }
                onClick={() => handleResumeChange('java')}
              >
                <Code2 size={16} />
                Java Developer
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeResume === 'analyst'}
                className={
                  activeResume === 'analyst' ? 'active' : ''
                }
                onClick={() => handleResumeChange('analyst')}
              >
                <BarChart3 size={16} />
                Data Analyst
              </button>
            </div>

            {/* Action Buttons */}
            <div className="resume-actions">

              <a
                className="button button-ghost"
                href={selectedResume.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye size={16} />
                View PDF
              </a>

              <a
                className="button button-primary"
                href={selectedResume.path}
                download={selectedResume.filename}
              >
                <Download size={16} />
                Download PDF
              </a>

            </div>
          </div>

          {/* PDF Viewer */}
          <div className="resume-viewer">

            <div className="resume-viewer-top">
              <span>
                <FileText size={15} />
                {selectedResume.name}
              </span>

              <span>PDF PREVIEW</span>
            </div>

            {/* Direct PDF Preview */}
            <div className="resume-pdf-container">

              <iframe
                key={selectedResume.path}
                src={`${selectedResume.path}#toolbar=1&navpanes=0&view=FitH`}
                title={selectedResume.title}
                className="resume-pdf-iframe"
              />

            </div>
          </div>

          <p className="resume-mobile-note">
            If the PDF preview is unavailable on your device,
            use View PDF or Download PDF.
          </p>

        </Reveal>
      </div>
    </section>
  );
}
