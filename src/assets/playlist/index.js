import playlist1 from './playlist1.mp3'
import playlist2 from './playlist2.mp3'
import playlist3 from './playlist3.mp3'
import playlist4 from './playlist4.mp3'

const playlist = [playlist1, playlist2, playlist3, playlist4]
let soundPlaylist = playlist[Math.floor(Math.random() * playlist.length)];
const randomPlaylist = () => {
    soundPlaylist = playlist[Math.floor(Math.random() * playlist.length)];
}

console.log(soundPlaylist);

export { soundPlaylist, randomPlaylist }
