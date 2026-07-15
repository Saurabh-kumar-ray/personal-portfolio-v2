"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}

export default function Typewriter({
  strings,
  typeSpeed = 60,
  backSpeed = 30,
  backDelay = 2000,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [arrayIndex, setArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    let timer: NodeJS.Timeout;
    const fullText = strings[arrayIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, backSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, typeSpeed);
    }

    // If fully typed, wait and switch to deleting
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, backDelay);
    }

    // If fully deleted, move to the next string in the array
    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setArrayIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, arrayIndex, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className="typewriter-container">
      {currentText}
      <span className="typewriter-cursor">|</span>
      <style jsx global>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .typewriter-cursor {
          animation: blink 0.8s infinite;
          margin-left: 2px;
          color: var(--accent-primary);
          font-weight: bold;
        }
      `}</style>
    </span>
  );
}
