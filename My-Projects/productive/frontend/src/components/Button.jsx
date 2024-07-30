/* eslint-disable react/prop-types */
export const StartButton = ({ text , onClick }) => {
  return (
    <button className="w-24 h-10 px-4 bg-[#df2020] text-white text-sm font-bold leading-normal rounded-full mx-2" onClick={onClick}>
      <span className="truncate">{text}</span>
    </button>
  );
};

export const ResetButton = ({ text , onClick }) => {
  return (
    <button className="w-24 h-10 px-4 bg-[#382929] text-white text-sm font-bold leading-normal rounded-full mx-2" onClick={onClick}>
      <span className="truncate">{text}</span>
    </button>
  );
};

export const SettingsButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="w-24 h-10 px-4 bg-transparent text-white text-sm font-bold leading-normal rounded-full mx-2">
      <span className="truncate">{text}</span>
    </button>
  );
};
