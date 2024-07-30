import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171111] text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} <a href="https://github.com/krishxps/">Made with ♥ by Krish.</a></p>
    </footer>
  );
};
