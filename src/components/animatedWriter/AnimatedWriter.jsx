import React, { useState, useEffect } from 'react';



function AnimatedWriter({text, delay}) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const flicker = () => {
    const timeout = setTimeout(() => {
      if (currentText.slice(-1) == '_') {
        setCurrentText(prevText => prevText.slice(0, -1) + ' ');
        return () => clearTimeout(timeout);
      }
        setCurrentText(prevText => prevText.slice(0, -1) + '_');
        return () => clearTimeout(timeout);
    }, delay);
  }

  useEffect(() => {
      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setCurrentText(prevText => prevText + text[currentIndex]);
        }
        else {
          flicker();
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, currentIndex < text.length ? delay : delay * 3);
  
      return () => clearTimeout(timeout);
  }, [currentText]);

  return(
    <span>$ {currentText}</span>
  )
}

export default AnimatedWriter;