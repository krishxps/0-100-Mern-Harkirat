import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional onClick for buttons where you might not need to navigate
}

export const StartButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="w-24 h-10 px-4 bg-[#df2020] text-white text-sm font-bold leading-normal rounded-full mx-2" onClick={onClick}>
      {text}
    </button>
  );
};

export const ResetButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="w-24 h-10 px-4 bg-[#382929] text-white text-sm font-bold leading-normal rounded-full mx-2" onClick={onClick}>
      <span className="truncate">{text}</span>
    </button>
  );
};

export const SettingsButton: React.FC<ButtonProps> = ({ text }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/settings');
  };

  return (
    <button onClick={handleClick} className="w-24 h-10 px-4 bg-transparent text-white text-sm font-bold leading-normal rounded-full mx-2">
      <span className="truncate">{text}</span>
    </button>
  );
};
