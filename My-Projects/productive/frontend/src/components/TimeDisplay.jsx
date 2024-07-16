/* eslint-disable react/prop-types */
export const TimeDisplay = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-24 h-16 bg-[#382929] rounded-md">
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <span className="mt-2">{label}</span>
    </div>
  );
};
