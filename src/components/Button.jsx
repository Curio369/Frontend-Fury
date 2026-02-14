import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon = null
}) => {
  const baseStyles = 'font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-aegis-forest dark:bg-aegis-emerald text-white hover:bg-aegis-forest/90 dark:hover:bg-aegis-emerald/90 shadow-soft',
    secondary: 'bg-white dark:bg-aegis-slate text-aegis-forest dark:text-aegis-emerald border-2 border-aegis-forest dark:border-aegis-emerald hover:bg-aegis-forest/5 dark:hover:bg-aegis-emerald/10',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-aegis-slate text-gray-700 dark:text-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
