import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export const timerState = atom<number>({
  key: 'timerState',
  default: 1500,
});

export const useTimer = () => {
  const timer = useRecoilValue(timerState);
  const setTimer = useSetRecoilState(timerState);
  return [timer, setTimer] as const;
};
