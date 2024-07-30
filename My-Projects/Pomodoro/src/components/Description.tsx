import React from 'react';

interface DescriptionProps {
  description: string;
}

export const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <p className="text-[#b79e9e] text-sm font-normal leading-normal text-center pt-1 pb-3">
      {description}
    </p>
  );
};
