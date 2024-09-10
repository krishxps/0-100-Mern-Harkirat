import PropTypes from 'prop-types'; 

interface TimerProps {
  time: string;
}

export const Timer = ({ time }: TimerProps) => {
  const [hours, minutes] = time.split(':');
  return (
    <div className="font-bold leading-tight text-white tracking-wide text-center pt-6 pb-3" style={{ fontSize: '12rem' }}>
      {`${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`}
    </div>
  );
};

Timer.propTypes = {
  time: PropTypes.string.isRequired,
};
