import { useState, createContext } from 'react';
import { SettingPanel, TimerPanel } from './Pomodoro_components';

export const PomodoroContext = createContext();

const PomodoroTimer = () => {
  const [showSetting, setShowSetting] = useState(false);
  const [timerSection, setTimerSection] = useState({
    activeObject: 1,
    object: [
      { type: 'Work', id: 1 },
      { type: 'Break', id: 2 },
    ],
  });

  const [timer, setTimer] = useState({
    work: 25,
    break: 5,
  });

  const toggleActive = (index) => {
    setTimerSection({
      ...timerSection,
      activeObject: index + 1,
    });
  };

  const toggleActiveStyle = (index) => {
    if (timerSection.activeObject === index + 1) {
      return 'active';
    } else {
      return '';
    }
  };

  return (
    <PomodoroContext.Provider
      value={{
        setShowSetting,
        timerSection,
        setTimerSection,
        timer,
        setTimer,
        toggleActive,
        toggleActiveStyle,
      }}
    >
      <div className="card dark:cardDark cardTheme  relative flex h-[65%] w-full flex-col items-center justify-center rounded-xl p-2  shadow-lg ">
        {showSetting ? <SettingPanel /> : <TimerPanel />}
      </div>
    </PomodoroContext.Provider>
  );
};

export default PomodoroTimer;
