import React, { ReactNode } from 'react';

interface CardProps {
  width?: string;        // Specify expected string format if needed (like 'full', '1/2', '1/4', etc.)
  padding?: string;      // Corresponds to Tailwind's padding scale (like '4', '2', '1', etc.)
  border?: string;       // Tailwind utility classes for borders
  borderRadius?: string; // Tailwind border radius classes (like 'none', 'sm', 'md', 'lg', 'xl', etc.)
  children?: ReactNode;  // Accept any valid React child elements
  className?: string;    // Additional CSS classes from the parent component
}

const Card: React.FC<CardProps> = ({
  width = 'full',
  padding = '4',
  border = '',
  borderRadius = 'xl',
  children,
  className = '',
  ...props
}) => {
  const widthClass = width === 'full' ? 'w-full' : `w-${width}`;
  const paddingClass = `p-${padding}`;
  const borderRadiusClass = `rounded-${borderRadius}`;

  return (
    <div className={`${widthClass} ${paddingClass} ${border ? `border ${border}` : ''} ${borderRadiusClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
