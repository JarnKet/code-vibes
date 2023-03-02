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
} from '../assets';

import {
    forestAmbient,
    cafeAmbient,
    cityAmbient,
    seaAmbient,
    universeAmbient,
} from '../assets';

import {
    book,
    keyboard,
    rain,
    keyboardSound,
    bookSound,
    rainSound,
} from '../assets';

export const scene = {
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
            volume: 0.5,
        },
        {
            type: 'City',
            id: 3,
            icon: city,
            bg: cityBG,
            sound: cityAmbient,
            volume: 0.3,
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
            volume: 0.5,
        },
    ],
}

export const environment = [{
    type: 'keyboard',
    id: 1,
    icon: keyboard,
    active: false,
    sound: keyboardSound,
},
{ type: 'book', id: 2, icon: book, active: false, sound: bookSound },
{ type: 'rain', id: 3, icon: rain, active: false, sound: rainSound },]
