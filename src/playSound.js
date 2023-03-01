import { Howl } from 'howler';

//? Normal Play
const playSound = (soundSrc) => {
  const sound = new Howl({
    src: [soundSrc],
    volume: 1,
  });

  sound.play();
};


//? Loop Play
const loopPlay = (soundSrc, condition) => {

  const sound = new Howl({
    src: [soundSrc],
    loop: true,
    volume: 0.5,
  });

  condition ? sound.play() : sound.pause();

};

export { playSound, loopPlay };






