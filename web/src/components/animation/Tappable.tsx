import { motion } from "framer-motion";
import React, { ComponentProps, memo } from 'react';

interface Props extends ComponentProps<typeof motion.div> {}

function Tappable({ children, onClick, whileHover = {}, whileTap = {} }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, ...whileHover as object }}
      whileTap={{ scale: 0.95, ...whileTap as object }}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  )
}

export default memo(Tappable);
