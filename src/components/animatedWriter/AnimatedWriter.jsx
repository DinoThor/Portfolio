import React, { useState, useEffect } from 'react';

const phrases = [
  "Software Developer",
  "Data Scientist",
  "Cloud Engineer"
]

function AnimatedWriter({ text, delay }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phraseTimer, setPhraseTimer] = useState(0);

  const [flicker, setFlicker] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Delete
      if (phraseTimer === -1 || phraseTimer < delay * 30) {
        if (phraseTimer === -1) {
          setPhraseTimer(0);
          setFlicker(1);
          return;
        }
        if (currentIndex < phrases[phraseIndex].length) {
          setCurrentText(prevText => prevText + phrases[phraseIndex][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
          setPhraseTimer(phraseTimer => phraseTimer + delay);
          setFlicker(1);
        }
        else {
          setFlicker(flicker === 1 ? 0 : 1);
          setPhraseTimer(phraseTimer => phraseTimer + delay);
        }
      }
      // Write
      else
        if (currentIndex > 0) {
          setCurrentText(prevText => prevText.slice(0, -1));
          setCurrentIndex(prevIndex => prevIndex - 1);
        }
        else {
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setPhraseTimer(-1);
        }
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <span>
      $ {currentText}
      <span style={{ opacity: flicker }}>_</span>
    </span>
  )
}

export default AnimatedWriter;