import {proxy} from 'valtio'

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './AstronautSticker.png',
    fullDecal: './AstronautSticker.png',
})

export default state