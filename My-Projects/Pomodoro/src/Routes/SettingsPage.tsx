import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { timerState } from '../Recoil/TimerContext';
import { ActionButton } from '../components/ActionButton';
import { NAME } from '../constants/constants';

export const SettingsPage = () => {
  const [time, setTime] = useRecoilState(timerState);
  const navigate = useNavigate();

  const handleTimeChange = (value: number, unit: 'hours' | 'minutes' | 'seconds') => {
    const hours = unit === 'hours' ? value : Math.floor(time / 3600);
    const minutes = unit === 'minutes' ? value : Math.floor((time % 3600) / 60);
    const seconds = unit === 'seconds' ? value : time % 60;
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    setTime(totalSeconds);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171111] text-white">
      <h1 className="text-4xl font-bold mb-8">{NAME}</h1>
      <div className="flex gap-4 mb-8">
        <div className="flex flex-col items-center">
          <input 
            type="number" 
            className="w-24 h-16 bg-[#382929] rounded-md text-center text-2xl font-bold text-white"
            value={Math.floor(time / 3600)} 
            onChange={(e) => handleTimeChange(Number(e.target.value), 'hours')}
            min="0"
          />
          <span className="mt-2">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <input 
            type="number" 
            className="w-24 h-16 bg-[#382929] rounded-md text-center text-2xl font-bold text-white"
            value={Math.floor((time % 3600) / 60)} 
            onChange={(e) => handleTimeChange(Number(e.target.value), 'minutes')}
            min="0"
          />
          <span className="mt-2">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <input 
            type="number" 
            className="w-24 h-16 bg-[#382929] rounded-md text-center text-2xl font-bold text-white"
            value={time % 60} 
            onChange={(e) => handleTimeChange(Number(e.target.value), 'seconds')}
            min="0"
          />
          <span className="mt-2">Seconds</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <ActionButton 
          text="Save" 
          bgColor="bg-[#df2020]" 
          additionalText="or press Space to start" 
          onClick={() => navigate('/')} 
        />
        <ActionButton 
          text="Go Back" 
          bgColor="bg-transparent" 
          borderColor="border border-white" 
          onClick={() => navigate('/')} 
        />
      </div>
    </div>
  );
};

export default SettingsPage;
