"use client";

import { useEffect, useRef } from "react";

type Direction = "forward" | "reverse";

export function HeroVideo({
  src = "/herovid.mp4",
  className = "absolute inset-0 -z-20 h-full w-full object-cover",
}: {
  src?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let direction: Direction = "forward";
    let rafId: number | null = null;
    let lastTime = 0;

    const stepReverse = (now: number) => {
      if (direction !== "reverse") {
        rafId = null;
        return;
      }
      const dt = lastTime ? (now - lastTime) / 1000 : 1 / 60;
      lastTime = now;

      const next = video.currentTime - dt;
      if (next <= 0) {
        video.currentTime = 0;
        direction = "forward";
        rafId = null;
        video.play().catch(() => {});
        return;
      }
      video.currentTime = next;
      rafId = requestAnimationFrame(stepReverse);
    };

    const handleEnded = () => {
      direction = "reverse";
      lastTime = 0;
      video.pause();
      if (rafId === null) rafId = requestAnimationFrame(stepReverse);
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
