import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  glass = false,
  padding = 'md'
}) => {
  const paddingSizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const baseStyles = `rounded-2xl transition-all duration-300 ${paddingSizes[padding]}`;
  const glassStyles = glass ? 'glass' : 'bg-white dark:bg-aegis-slate';
  const hoverStyles = hover ? 'card-shadow' : 'shadow-soft';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
