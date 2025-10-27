"use client";
import React, { useState, useEffect, useCallback } from "react";

const TypingAnimation: React.FC = () => {
  const messages = [
    "Process Engineering.",
    "Apprentice PT Lotte Chemical Indonesia.",
    "Polypropylene Departement.",
  ];

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

  // Dynamic typing speeds for more natural feel
  const getTypingSpeed = useCallback(() => {
    const baseSpeed = 80;
    const variance = Math.random() * 40; // Random variance for natural typing
    return baseSpeed + variance;
  }, []);

  const getDeletingSpeed = useCallback(() => {
    return 40 + Math.random() * 30;
  }, []);

  const pauseTime = 1200;

  useEffect(() => {
    if (isPaused || isHoverPaused) return;

    const currentMessage = messages[messageIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Smooth deleting with slight delay at start
        if (charIndex > 0) {
          setCurrentText(currentMessage.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
          // Small pause before starting next message
          setIsPaused(true);
          setTimeout(() => setIsPaused(false), 300);
        }
      } else {
        // Smooth typing with character-by-character reveal
        if (charIndex < currentMessage.length) {
          setCurrentText(currentMessage.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Longer pause at end of message
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    const speed = isDeleting ? getDeletingSpeed() : getTypingSpeed();
    const typingTimeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimeout);
  }, [
    charIndex,
    isDeleting,
    messageIndex,
    isPaused,
    isHoverPaused,
    messages,
    getTypingSpeed,
    getDeletingSpeed,
  ]);

  return (
    <div className="relative inline-block">
      <span
        className="text-2xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent animate-gradient-x"
        onMouseEnter={() => setIsHoverPaused(true)}
        onMouseLeave={() => setIsHoverPaused(false)}
      >
        {currentText}
        <span 
          className={`ml-0.5 inline-block w-0.5 h-8 bg-gradient-to-b from-green-500 to-emerald-700 dark:from-green-300 dark:to-emerald-500 ${
            isPaused || isHoverPaused ? "opacity-100" : "animate-pulse"
          }`}
          style={{
            animation: isPaused || isHoverPaused ? 'none' : 'blink 1s infinite'
          }}
        />
      </span>
      
      {/* Floating background effect */}
      <div className="absolute inset-0 -z-10 opacity-10 blur-lg">
        <div className="w-full h-full bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default TypingAnimation;