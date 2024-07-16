import { useNavigate } from 'react-router-dom';
import { Timer } from './Time';
import { StartButton, ResetButton, SettingsButton } from './Button';
import { Description } from './Description';

export const MainContent = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div className="px-40 flex justify-center py-5">
      <div className="max-w-7xl flex flex-col w-full">
        <Timer time="25:00" />
        <div className="flex justify-center">
          <StartButton text="Start" />
          <ResetButton text="Reset" />
        </div>
        <Description description="Press the start button to begin a 25 minutes Pomodoro." />
        <div className="flex justify-center">
          <SettingsButton text="Settings" onClick={handleSettingsClick} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
