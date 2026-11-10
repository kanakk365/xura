"use client";
import { motion } from "motion/react";

interface HeroFyntBlockProps {
  id?: string;
  className?: string;
}

export function HeroFyntBlock({ className }: HeroFyntBlockProps) {
  return (
    <motion.g
      id="fynt-block"
      className={className}
      initial={{ y: 0 }}
      animate={{ y: -10 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      <path
        d="M450 187 L484 222"
        stroke="#8bfb03"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M484 187 L450 222"
        stroke="#8bfb03"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M450 187 L484 222"
        stroke="#0a0a0a"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M484 187 L450 222"
        stroke="#0a0a0a"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </motion.g>
  );
}
