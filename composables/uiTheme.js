import { useState } from '#app';

export const useRtl = () => (useState('rtl', () => undefined));
export const useThemeMode = () => (useState('mode', () => undefined));

const states = {
  themeMode: useThemeMode,
  rtl: useRtl,
};

export function toggleDark() {
  const themeMode = useThemeMode();
  const storedTheme = localStorage.getItem('luxiDarkMode');

  themeMode.value = storedTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('luxiDarkMode', themeMode.value);
}

export function setRtl(val) {
  const rtl = useRtl();
  rtl.value = val;
}

export default states;
