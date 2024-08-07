/* eslint-disable react/prop-types */
export const ActionButton = ({ text, bgColor, borderColor, additionalText, onClick }) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <button className={`w-40 h-12 ${bgColor} ${borderColor} rounded-full`} onClick={onClick}>
          {text}
        </button>
        {additionalText && <span>{additionalText}</span>}
      </div>
    );
  };