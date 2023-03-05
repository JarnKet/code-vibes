import React, { useState, useEffect, useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { playSound } from '../playSound';
import { switchThemeSound } from '../assets';
import { DarkModeContext } from './context/DarkModeContext';

const Header = () => {
  const { theme, setTheme } = useContext(DarkModeContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return function cleanUp() {
      clearInterval(timer);
    };
  });

  return (
    <header className=" w-full sm:fixed  sm:mt-4 ">
      <nav className="card dark:cardDark container mx-auto flex max-w-3xl justify-between rounded-lg p-2 shadow-lg">
        <h1 className="font-jetMono  font-extrabold sm:text-xl">
          CODE <span className="textGradient">VIBES</span>
        </h1>

        <div className="flex items-center justify-center ">
          <p className="text-md mr-4 font-jetMono">
            {date.toLocaleTimeString()}
          </p>

          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => {
              setTheme((prev) => !prev);
              playSound(switchThemeSound);
            }}
          >
            <div className=" h-6 w-6">{theme ? <MoonIcon /> : <SunIcon />}</div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
