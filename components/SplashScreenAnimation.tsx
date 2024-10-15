"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const SplashScreen: React.FC = () => {
  const qRef = useRef<HTMLDivElement | null>(null);
  const uRef = useRef<HTMLDivElement | null>(null);
  const iRef = useRef<HTMLDivElement | null>(null);
  const kRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsVisible(false), // Hide the splash screen after animation completes
    });

    // Letters animation (U, I, K merge into Q)
    tl.fromTo(
      [qRef.current, uRef.current, iRef.current, kRef.current],
      { opacity: 0, y: -100, scale: 0 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "elastic",
      }
    );

    // Q animation for splash effect
    tl.to([qRef.current, iRef.current, uRef.current, kRef.current], {
      scale: 1.5,
      rotation: 360,
      duration: 1,
      ease: "power1.in",
    }).to([qRef.current, iRef.current, uRef.current, kRef.current], {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
    });

    // Fade out all letters after the splash effect
    tl.to([qRef.current, uRef.current, iRef.current, kRef.current], {
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  if (!isVisible) return null; // Hide the splash screen after animation

  return (
    <div className={"splashScreen"}>
      <div className={"letter"} ref={qRef}>
        K
      </div>
      <div className={"letter"} ref={uRef}>
        H
      </div>
      <div className={"letter"} ref={iRef}>
        A
      </div>
      <div className={"letter"} ref={kRef}>
        N
      </div>
    </div>
  );
};

export default SplashScreen;
