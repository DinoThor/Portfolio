import React, { useState, useEffect } from 'react';

function AnimatedWriter({text, delay}) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
      const timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setCurrentText(prevText => prevText + text[currentIndex]);
        }
        else {
          setCurrentText(prevText => currentIndex % 2 == 0 ? prevText + "|" : prevText.slice(0, -1));
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, currentIndex < text.length ? delay : delay * 3);
  
      return () => clearTimeout(timeout);
  }, [currentIndex]);

  return(
    <span>$ {currentText}</span>
  )
}

export default AnimatedWriter;