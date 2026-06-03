'use client';

import { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
  words: string[];
  className?: string;
}

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

export default function TypeWriter({ words, className }: TypeWriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const fullWord = words[wordIndex];

    if (isDeleting) {
      setCurrentText((prev) => prev.slice(0, -1));
    } else {
      setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
    }
  }, [isDeleting, wordIndex, words]);

  useEffect(() => {
    const fullWord = words[wordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === fullWord) {
      // Finished typing — pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && currentText === '') {
      // Finished deleting — move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(tick, TYPING_SPEED);
    } else {
      // Continue typing or deleting
      timeout = setTimeout(tick, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, wordIndex, words, tick]);

  return (
    <span className={className}>
      {currentText}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          color: 'var(--color-amber)',
          fontWeight: 400,
          animation: 'cursorBlink 1s step-end infinite',
        }}
      >
        |
      </span>
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
