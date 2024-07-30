import React from 'react';
import { NAME, Logo } from "../constants/constants";

export const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid border-b-[#382929] px-10 py-3 text-white">
      <div className="flex items-center gap-4">
        <Logo />
        <h2 className="text-lg font-bold leading-tight tracking-wide">{NAME}</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <a href="#" className="text-sm font-medium leading-normal text-white">Features</a>
        <a href="#" className="text-sm font-medium leading-normal text-white">Settings</a>
        <a href="#" className="text-sm font-medium leading-normal text-white">Code Source</a>
        <button className="flex items-center justify-center w-24 h-10 px-4 bg-[#df2020] text-white text-sm font-bold leading-normal rounded-full">
          <span className="truncate">Sign in</span>
        </button>
      </div>
    </header>
  );
};
