import PropTypes from 'prop-types'; 

export const Timer = ({ time }) => {
  const [hours, minutes] = time.split(':');
  return (
    <div className="text-[32px] font-bold leading-tight text-white tracking-wide text-center pt-6 pb-3">
      {`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`}
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.string.isRequired,
};
