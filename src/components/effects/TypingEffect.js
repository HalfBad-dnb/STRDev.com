import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

// Helper function to find the longest string in an array
const findLongestString = (arr) => {
  if (!arr || arr.length === 0) return '';
  return arr.reduce((longest, current) => 
    current.length > longest.length ? current : longest, '');
};

const TypingEffect = ({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    // Toggle caret visibility every 500ms
    const caretInterval = setInterval(() => {
      setShowCaret(prev => !prev);
    }, 500);

    return () => clearInterval(caretInterval);
  }, []);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const currentText = texts[currentIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Done typing current word, pause before deleting
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, delayBetween);
        return () => clearTimeout(timer);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Done deleting, move to next word and start typing again
        setCurrentIndex((currentIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween]);

  // Calculate the width based on the longest text
  const longestText = findLongestString(texts || []);
  
  return (
    <div className="typing-effect">
      <div className="typing-text" style={{ width: `${longestText.length}ch` }}>
        <div className="text-container">
          <span className="visible-text">{displayedText}</span>
          <span className={`caret ${showCaret ? 'visible' : 'hidden'}`}></span>
        </div>
        <span className="invisible-text" aria-hidden="true">{longestText}</span>
      </div>
    </div>
  );
};

export default TypingEffect;
