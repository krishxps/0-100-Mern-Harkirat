/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const Timer = ({ time }) => {
    const [hours, minutes] = time.split(':');
  
    return (
      <div className="text-[32px] font-bold leading-tight text-white tracking-wide text-center pt-6 pb-3">
        {`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`}
      </div>
    );
  };
  