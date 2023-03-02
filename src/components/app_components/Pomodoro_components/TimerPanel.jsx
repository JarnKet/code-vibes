import { useContext, useState, useRef, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  PlayIcon,
  PauseIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { PomodoroContext } from '../PomodoroTimer';
import { DarkModeContext } from '../../context/DarkModeContext';
import { playSound } from '../../../playSound';
import { alarmBeep } from '../../../assets';

const TimerPanel = () => {
  const {
    setShowSetting,
    timer,
    timerSection,
    toggleActive,
    toggleActiveStyle,
  } = useContext(PomodoroContext);
  const { theme } = useContext(DarkModeContext);

  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);

  const checkActive = timerSection.activeObject === timerSection.object[0].id;

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    const nextSeconds = (checkActive ? timer.work : timer.break) * 60;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;

    secondsLeftRef.current = (checkActive ? timer.work : timer.break) * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        setIsPaused(true);
        isPausedRef.current = true;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;

        playSound(alarmBeep);
      }

      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, timerSection]);

  const workSeconds = timer.work * 60;
  const breakSeconds = timer.break * 60;

  const workPercentage = Math.round((secondsLeft / workSeconds) * 100);
  const breakPercentage = Math.round((secondsLeft / breakSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center  font-jetMono">
      <h1 className="font-jetMono   text-xl font-bold lg:text-2xl">
        Pomodoro Timer
      </h1>

      <ul className="m-3 flex gap-5">
        {timerSection.object.map((element, index) => (
          <li
            key={index}
            className={`w-[70px] cursor-pointer rounded-lg  p-2 text-center ${toggleActiveStyle(
              index
            )}`}
            onClick={() => {
              toggleActive(index);
            }}
          >
            {element.type}
          </li>
        ))}
      </ul>

      <div className="mt-4  h-[150px]  w-[150px]  font-bold">
        <CircularProgressbar
          value={checkActive ? workPercentage : breakPercentage}
          text={minutes + ':' + seconds}
          styles={buildStyles({
            textColor: theme ? '#fff' : 'rgb(23,23,23)',
            pathColor: theme ? '#fff' : 'rgb(23,23,23)',
            trailColor: theme ? '#999' : '#fff',
          })}
        />
      </div>

      <div className="mt-6  ">
        {isPaused ? (
          <PlayIcon
            className="darkThemeComponent  h-8 w-8 cursor-pointer rounded-lg"
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseIcon
            className="darkThemeComponent  h-8 w-8 cursor-pointer rounded-lg"
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <Cog6ToothIcon
        className="darkThemeComponent absolute top-5 right-5 h-8 w-8 cursor-pointer rounded-lg"
        onClick={() => setShowSetting((prev) => !prev)}
      />
    </div>
  );
};

export default TimerPanel;
