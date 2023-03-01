import { useState, useContext } from 'react';
import ReactHowler from 'react-howler';
import { BackgroundContext } from '../context/BackgroundContext';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import {
  sea,
  forest,
  city,
  cafe,
  universe,
  forestBG,
  cityBG,
  cafeBG,
  universeBG,
  seaBG,
} from '../../assets';

import {
  forestAmbient,
  cafeAmbient,
  cityAmbient,
  seaAmbient,
  universeAmbient,
} from '../../assets';

import {
  book,
  keyboard,
  rain,
  keyboardSound,
  bookSound,
  rainSound,
} from '../../assets';

import { soundPlaylist } from '../../assets/playlist';

const SoundContainer = () => {
  const { setBackground } = useContext(BackgroundContext);
  const [play, setPlay] = useState(false);

  const [sceneSection, setSceneSection] = useState({
    activeObject: null,
    object: [
      {
        type: 'Forest',
        id: 1,
        icon: forest,
        bg: forestBG,
        sound: forestAmbient,
        volume: 0.5,
      },
      {
        type: 'Sea',
        id: 2,
        icon: sea,
        bg: seaBG,
        sound: seaAmbient,
        volume: 0.3,
      },
      {
        type: 'City',
        id: 3,
        icon: city,
        bg: cityBG,
        sound: cityAmbient,
        volume: 0.1,
      },
      {
        type: 'Universe',
        id: 4,
        icon: universe,
        bg: universeBG,
        sound: universeAmbient,
        volume: 0.5,
      },
      {
        type: 'Cafe',
        id: 5,
        icon: cafe,
        bg: cafeBG,
        sound: cafeAmbient,
        volume: 0.3,
      },
    ],
  });

  const [environmentSound, setEnvironmentSound] = useState([
    {
      type: 'keyboard',
      id: 1,
      icon: keyboard,
      active: false,
      sound: keyboardSound,
    },
    { type: 'book', id: 2, icon: book, active: false, sound: bookSound },
    { type: 'rain', id: 3, icon: rain, active: false, sound: rainSound },
  ]);

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
    <div className="cardTheme card dark:cardDark flex h-[35%]   w-full flex-col items-center justify-center rounded-xl shadow-lg ">
      <h1 className="font-jetMono text-xl font-bold">Sound Container</h1>

      <MusicalNoteIcon
        className={`my-4 h-12 w-12 cursor-pointer rounded-lg p-2 shadow-xl ${
          play ? 'active' : null
        }`}
        onClick={() => setPlay((prev) => !prev)}
      />
      <ReactHowler
        src={`${soundPlaylist}`}
        playing={play ? true : false}
        volume={1}
        html5={true}
      />

      <ul className="mb-4 flex w-full flex-row flex-wrap items-center justify-around">
        {environmentSound.map((element, index) => (
          <li className="flex   items-center justify-center " key={index}>
            <img
              className={`h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-lg object-contain p-2 shadow-lg hover:shadow-xl sm:h-[70px] sm:w-[70px] ${toggleActiveStyle(
                element.active
              )}`}
              src={element.icon}
              alt={element.type}
              onClick={() => {
                toggleEnvironment(index);
              }}
            />
            <ReactHowler
              src={`${element.sound}`}
              playing={element.active ? true : false}
              loop={true}
              volume={0.5}
            />
          </li>
        ))}
      </ul>

      <ul className="flex w-full flex-row flex-wrap items-center justify-around   ">
        {sceneSection.object.map((element, index) => (
          <li className="flex   items-center justify-center " key={index}>
            <img
              className={`h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-lg object-contain p-2 shadow-lg hover:shadow-xl sm:h-[70px] sm:w-[70px] ${toggleActiveStyle(
                sceneSection.activeObject === index
              )}`}
              src={element.icon}
              alt={element.type}
              onClick={() => {
                toggleSceneActive(index);
                toggleActiveBackground(index);
              }}
            />
            <ReactHowler
              src={`${element.sound}`}
              playing={index === sceneSection.activeObject ? true : false}
              loop={true}
              volume={element.volume}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoundContainer;
