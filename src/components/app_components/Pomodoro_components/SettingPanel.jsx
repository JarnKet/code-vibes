import { useContext, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PomodoroContext } from '../PomodoroTimer';
import Button from '../../Button';

const SettingPanel = () => {
  const { setShowSetting, timer, setTimer } = useContext(PomodoroContext);
  const [workTime, setWorkTime] = useState(timer.work);
  const [breakTime, setBreakTime] = useState(timer.break);

  const workHandleChange = (e) => {
    setWorkTime(parseInt(e.target.value) || 1);
  };

  const breakHandleChange = (e) => {
    setBreakTime(parseInt(e.target.value) || 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimer({
      work: typeof workTime === 'number' ? workTime : 1,
      break: typeof breakTime === 'number' ? breakTime : 1,
    });

    setShowSetting((prev) => !prev);
  };

  return (
    <div className="flex h-auto w-auto flex-col items-center justify-center  font-jetMono">
      <h1 className=" mb-6 font-bold lg:text-4xl">Setting Panel</h1>

      <form noValidate className="flex w-full flex-col gap-4">
        <input
          type="text"
          name="work"
          placeholder="Work Minutes"
          className="rounded-lg p-2 shadow-xl dark:bg-neutral-800"
          value={workTime}
          onChange={workHandleChange}
        />
        <input
          type="text"
          name="break"
          placeholder="Break Minutes"
          className="rounded-lg p-2 shadow-xl dark:bg-neutral-800"
          value={breakTime}
          onChange={breakHandleChange}
        />
        <Button
          typeBtn={'submit'}
          classStyle={'w-full font-notoLaos '}
          text={'Set Timer'}
          onClickFunction={handleSubmit}
        />
      </form>

      <div className="absolute top-5 right-5">
        <XMarkIcon
          className="darkThemeComponent h-8 w-8 cursor-pointer rounded-lg"
          onClick={() => {
            setShowSetting((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default SettingPanel;
