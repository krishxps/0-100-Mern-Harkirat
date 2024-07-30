import React from 'react';

interface ActionButtonProps {
  text: string;
  bgColor: string;
  borderColor?: string;
  additionalText?: string;
  onClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, bgColor, borderColor, additionalText, onClick }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button 
        className={`w-40 h-12 ${bgColor} ${borderColor} rounded-full text-white font-bold text-lg`}
        onClick={onClick}
      >
        {text}
      </button>
      {additionalText && <span className="text-sm text-gray-400">{additionalText}</span>}
    </div>
  );
};
