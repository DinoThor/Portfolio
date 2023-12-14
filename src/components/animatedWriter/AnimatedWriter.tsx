import React, { useState, useEffect } from 'react';

const phrases: String[] =
  [
    "Software Developer",
    "Data Scientist",
    "Cloud Engineer",
    "AI enthusiast"
  ]

function AnimatedWriter({ delay }: { delay: number }) {
  const [currentText, setCurrentText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [phraseTimer, setPhraseTimer] = useState<number>(0);

  const [flicker, setFlicker] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Delete
      if (phraseTimer === -1 || phraseTimer < delay * 30) {
        if (phraseTimer === -1) {
          setPhraseTimer(() => 0);
          setFlicker(() => 1);
          return;
        }
        if (currentIndex < phrases[phraseIndex].length) {
          setCurrentText(prevText => prevText + phrases[phraseIndex][currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
          setPhraseTimer(phraseTimer => phraseTimer + delay);
          setFlicker(() => 1);
        }
        else {
          setFlicker(() => flicker === 1 ? 0 : 1);
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
          setPhraseIndex(() => (phraseIndex + 1) % phrases.length);
          setPhraseTimer(() => -1);
        }
    }, delay);

    return () => clearTimeout(timeout);
  }, [phraseTimer, currentIndex]);

  return (
    <span>$ {currentText}<span style={{ opacity: flicker }}>_</span></span>
  )
}

export default AnimatedWriter;