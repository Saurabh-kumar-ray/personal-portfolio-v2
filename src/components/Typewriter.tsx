"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
}

export default function Typewriter({
  strings,
  typeSpeed = 60,
  backSpeed = 30,
  backDelay = 2000,
  startDelay = 500,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [arrayIndex, setArrayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const fullText = strings[arrayIndex];
    let timer: NodeJS.Timeout;

    if (isWaiting) {
      return;
    }

    if (isDeleting) {
      if (currentText === "") {
        setIsWaiting(true);
        timer = setTimeout(() => {
          setIsDeleting(false);
          setIsWaiting(false);
          setArrayIndex((prev) => (prev + 1) % strings.length);
        }, startDelay);
      } else {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, backSpeed);
      }
    } else {
      if (currentText === fullText) {
        setIsWaiting(true);
        timer = setTimeout(() => {
          setIsDeleting(true);
          setIsWaiting(false);
        }, backDelay);
      } else {
        timer = setTimeout(() => {
          setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isWaiting, arrayIndex, strings, typeSpeed, backSpeed, backDelay, startDelay]);

  return (
    <span className="typewriter-container">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

