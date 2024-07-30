import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { timerState } from '../Recoil/TimerContext';
import { Timer } from './Timer';
import { StartButton, ResetButton, SettingsButton } from './Button';
import { Description } from './Description';

const DEFAULT_TIME = 25 * 60;

export const MainContent = () => {
  const [time, setTime] = useRecoilState(timerState);
  const [isActive, setIsActive] = useState(false);
  const [lastUserTime, setLastUserTime] = useState<number>(DEFAULT_TIME); 
  const timeRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            playSound();
            setIsActive(false);
            return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    }
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [isActive, setTime]);

  const playSound = () => {
    const audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
    audio.play();
  };

  const handleStartClick = () => {
    if (time > 0) {
      setIsActive((prev) => !prev); 
    }
  };

  const handleResetClick = () => {
    setIsActive(false);
    setTime(lastUserTime);
  };

  const handleSettingsClick = () => {
    navigate('/settings', { state: { onUpdateTime: handleSettingsUpdate } });
  };

  const handleSettingsUpdate = (newTime: number) => {
    setLastUserTime(newTime);
    setTime(newTime);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 flex justify-center py-5">
      <div className="max-w-4xl flex flex-col w-full items-center">
        <Timer time={formatTime(time)} />
        <div className="flex justify-center mt-8 gap-4">
          <StartButton text={isActive ? "Pause" : "Start"} onClick={handleStartClick} />
          <ResetButton text="Reset" onClick={handleResetClick} />
        </div>
        <Description description="Press the start button to begin a Pomodoro session." />
        <div className="flex justify-center mt-4">
          <SettingsButton text="Settings" onClick={handleSettingsClick} />
        </div>
      </div>
    </div>
  );
};

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default MainContent;
