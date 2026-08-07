import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean; // Set to true if rendering on light backgrounds
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  dark = false
}) => {
  // Text colors based on background
  const elevateColor = dark ? 'text-[#082846]' : 'text-white';
  const xColor = 'text-[#22c55e]'; // Green 'x' as shown in image
  const advisorColor = dark ? 'text-[#475569]' : 'text-[#cbd5e1]'; // Soft silver/gray for 'Advisor'

  return (
    <div className={`flex items-center select-none ${className}`}>
      <div className="font-sans font-bold text-2xl sm:text-[28px] tracking-tight leading-none flex items-center">
        {/* Elevate */}
        <span className={`font-extrabold ${elevateColor}`}>Elevate</span>
        {/* Green x */}
        <span className={`font-extrabold ${xColor}`}>x</span>
        {/* Space */}
        <span className="w-1.5 sm:w-2" />
        {/* Advisor */}
        <span className={`font-normal ${advisorColor}`}>Advisor</span>
      </div>
    </div>
  );
};


