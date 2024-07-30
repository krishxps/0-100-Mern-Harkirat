import { useNavigate } from 'react-router-dom';
import { Timer } from './Time';
import { StartButton, ResetButton, SettingsButton } from './Button';
import { Description } from './Description';
import { useEffect, useRef, useState } from 'react';

export const MainContent = () => {
  const [time, setTime] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const timeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            playSound();
            playSound();
            setIsActive(false);
            setTime(15);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timeRef.current);
    };
  }, [isActive]);

  const playSound = () => {
    const audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
    audio.play();
  };
  const handleStartClick = () => {
    if (time > 0) setIsActive(true);
  };

  const handleResetClick = () => {
    setIsActive(false);
    setTime(1500);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };


  return (
    <div className="px-40 flex justify-center py-5">
      <div className="max-w-7xl flex flex-col w-full">
        <Timer time={`${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`} />
        <div className="flex justify-center">
          <StartButton text="Start" onClick={handleStartClick} />
          <ResetButton text="Reset" onClick={handleResetClick} />
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
