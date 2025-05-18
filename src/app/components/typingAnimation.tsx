"use client"
// components/TypingAnimation.tsx
import React, { useState, useEffect } from 'react';

const TypingAnimation: React.FC = () => {
    const messages = ['Creative Fullstack Developer.', 'Transforming Ideas into Code.', 'Crafting Digital Experiences.'];
    const typingSpeed = 200;     // Kecepatan mengetik per karakter dalam milidetik
    const deletingSpeed = 100;    // Kecepatan menghapus per karakter dalam milidetik
    const pauseTime = 1000;      // Jeda di akhir setiap pesan dalam milidetik

    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isHoverPaused, setIsHoverPaused] = useState(false);

    useEffect(() => {
        if (isPaused || isHoverPaused) {
            return;
        }

        const handleTyping = () => {
            const currentMessage = messages[messageIndex];

            if (isDeleting) {
                // Hapus karakter satu per satu
                if (charIndex > 0) {
                    setCurrentText(currentMessage.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Setelah selesai menghapus, lanjutkan ke pesan berikutnya dan mulai mengetik lagi
                    setIsDeleting(false);
                    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
                }
            } else {
                // Tambahkan karakter satu per satu
                if (charIndex < currentMessage.length) {
                    setCurrentText(currentMessage.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Setelah selesai mengetik pesan, aktifkan jeda sebelum menghapus
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), pauseTime);
                    setIsDeleting(true);
                }
            }
        };

        const typingInterval = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(typingInterval);
    }, [charIndex, isDeleting, messageIndex, isPaused, messages]);

    return (
        <span className="text-2xl font-bold text-green-500 dark:text-green-600" onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
        >
            {currentText}
            <span className="animate-blink">|</span>
        </span>
    );
};

export default TypingAnimation;
