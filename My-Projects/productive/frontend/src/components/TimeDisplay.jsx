/* eslint-disable react/prop-types */
export const TimeDisplay = ({ value, label, onChange }) => {
    return (
      <div className="flex flex-col items-center">
        <input
          type="number"
          className="w-24 h-16 bg-[#382929] rounded-md text-center text-2xl font-bold text-white"
          value={value}
          onChange={onChange}
          min="0"
        />
        <span className="mt-2">{label}</span>
      </div>
    );
  };