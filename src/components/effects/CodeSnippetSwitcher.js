// src/components/effects/CodeSnippetSwitcher.js
import React, { useState, useEffect } from 'react';
import CodeSnippets from './CodeSnippets';
import CodeSnippetMobile from './CodeSnippetMobile';

const CodeSnippetSwitcher = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile/desktop
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile ? <CodeSnippetMobile /> : <CodeSnippets />;
};

export default CodeSnippetSwitcher;