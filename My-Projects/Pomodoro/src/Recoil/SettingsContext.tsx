import { atom } from 'recoil';

export const settingsState = atom({
  key: 'settingsState',
  default: {
    time: 25 * 60,
  },
});
