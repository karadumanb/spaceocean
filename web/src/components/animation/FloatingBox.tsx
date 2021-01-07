import { motion } from "framer-motion";
import React, { useMemo } from 'react';

export default function FloatingBox({ children }: { children: React.ReactNode; }) {
  const getRandomValue = () => {
    const random = (Math.random() * 10) + 20;
    return Math.floor(random % 2) === 0 ? -random : random
  }

  const randomValue = useMemo(() => ({ x: getRandomValue(), y: getRandomValue() }), []);

  const variants = {
    variantA: { x: 0, y: 0 },
    variantB: randomValue,
  };

  return (
    <motion.div
      initial={"variantA"}
      animate={"variantB"}
      variants={variants}
      transition={{
        ease: 'easeOut',
        duration: 5,
        yoyo: Infinity
      }}
    >
      {children}
    </motion.div>
  )
}
