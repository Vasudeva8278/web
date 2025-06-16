import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  padding = true,
  variant = 'default',
  ...props
}) => {
  const variantClasses = {
    default: 'card',
    elevated: 'card shadow-lg',
    outlined: 'card border-2',
    flat: 'bg-white border border-gray-200 rounded-xl'
  };

  const cardClasses = [
    variantClasses[variant],
    hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cardClasses}
      {...props}
    >
      {padding ? (
        <div className="p-6">
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;