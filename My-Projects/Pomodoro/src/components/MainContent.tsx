import { useNavigate } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { StartButton, ResetButton, SettingsButton } from '../components/Button';
import { Description } from '../components/Description';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { timerState } from '../Recoil/TimerContext';

export const MainContent = () => {
  const [totalSeconds, setTotalSeconds] = useRecoilState(timerState);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState('Start');
  const timeRef = useRef<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      timeRef.current = window.setInterval(() => {
        setTotalSeconds(prevTime => {
          if (prevTime === 0) {
            playSound();
            setIsActive(false);
            setButtonText('Start'); 
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeRef.current) {
      clearInterval(timeRef.current);
    }
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, [isActive, setTotalSeconds]);

  const playSound = () => {
    const audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
    audio.play();
  };

  const handleStartClick = () => {
    if (totalSeconds > 0) {
      setIsActive(prev => !prev);
      setButtonText(prev => prev === 'Start' ? 'Pause' : 'Start');
    }
  };

  const handleResetClick = () => {
    setIsActive(false);
    setButtonText('Start');
    setTotalSeconds(1500);
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div className="px-40 flex justify-center py-5">
      <div className="max-w-7xl flex flex-col w-full">
        <Timer time={`${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}`} />
        <div className="flex justify-center">
          <StartButton text={buttonText} onClick={handleStartClick} />
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
