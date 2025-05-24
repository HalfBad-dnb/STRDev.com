import React from 'react';
import TypingEffect from '../effects/TypingEffect';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, typingTexts = [] }) => {
  return (
    <div className="section-header">
      <h2>
        {typingTexts.length > 0 ? (
          <TypingEffect 
            texts={typingTexts} 
            typingSpeed={100} 
            deletingSpeed={50} 
            delayBetween={3000}
          />
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="underline"></div>
    </div>
  );
};

export default SectionHeader;
