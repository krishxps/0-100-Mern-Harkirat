import React from 'react';

interface TimeDisplayProps {
  value: number;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ value, label, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <label className="text-lg">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-16 text-center bg-gray-800 border border-gray-700 text-white"
        min="0"
      />
    </div>
  );
};

export default TimeDisplay;
