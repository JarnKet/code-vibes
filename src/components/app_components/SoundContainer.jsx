import { useState, useContext } from 'react';
import ReactHowler from 'react-howler';
import { BackgroundContext } from '../context/BackgroundContext';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { scene, environment } from '../../constants/soundContainerData';
import { soundPlaylist } from '../../assets/playlist';

const SoundContainer = () => {
  const { setBackground } = useContext(BackgroundContext);
  const [play, setPlay] = useState(false);

  const [sceneSection, setSceneSection] = useState(scene);
  const [environmentSound, setEnvironmentSound] = useState(environment);

  const toggleEnvironment = (index) => {
    //* Update Object in Array
    setEnvironmentSound((prevState) => {
      const newState = prevState.map((obj) => {
        if (obj.id === index + 1) {
          return { ...obj, active: !obj.active };
        }
        return obj;
      });

      return newState;
    });
  };

  const toggleSceneActive = (index) => {
    setSceneSection({
      ...sceneSection,
      activeObject: index,
    });
  };

  const toggleActiveStyle = (condition) => {
    if (condition) {
      return 'active';
    } else {
      return '';
    }
  };

  const toggleActiveBackground = (index) => {
    if (sceneSection.activeObject === index) {
      setBackground(() => sceneSection.object[index].bg);
    } else {
      setBackground(() => sceneSection.object[index].bg);
    }
  };

  return (
    <div className="cardTheme card dark:cardDark flex h-[40%] w-full   flex-col items-center justify-center rounded-xl p-4 shadow-lg ">
      <h1 className="font-jetMono text-xl font-bold">Sound and Scene</h1>

      <MusicalNoteIcon
        className={`my-2 h-[50px] w-[50px]  cursor-pointer rounded-lg p-2 shadow-xl ${
          play ? 'active' : null
        }`}
        onClick={() => setPlay((prev) => !prev)}
      />
      <ReactHowler
        src={`${soundPlaylist}`}
        playing={play ? true : false}
        volume={1}
      />

      <div className="mb-2 flex w-full flex-row  items-center justify-around">
        {environmentSound.map((element, index) => (
          <button
            className="flex   items-center justify-center "
            key={index}
            type="button"
            onClick={() => {
              toggleEnvironment(index);
            }}
          >
            <img
              className={`h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-lg object-contain p-2 shadow-lg hover:shadow-xl  ${toggleActiveStyle(
                element.active
              )}`}
              src={element.icon}
              alt={element.type}
            />
            <ReactHowler
              src={`${element.sound}`}
              playing={element.active ? true : false}
              loop={true}
              volume={0.5}
            />
          </button>
        ))}
      </div>

      <div className="flex w-full flex-row  items-center justify-around   ">
        {sceneSection.object.map((element, index) => (
          <button
            className="flex   items-center justify-center "
            key={index}
            type="button"
            onClick={() => {
              toggleSceneActive(index);
              toggleActiveBackground(index);
            }}
          >
            <img
              className={`h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-lg object-contain p-2 shadow-lg hover:shadow-xl  ${toggleActiveStyle(
                sceneSection.activeObject === index
              )}`}
              src={element.icon}
              alt={element.type}
            />
            <ReactHowler
              src={`${element.sound}`}
              playing={index === sceneSection.activeObject ? true : false}
              loop={true}
              volume={element.volume}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoundContainer;
