import {proxy} from 'valtio'

const state = proxy({
    intro: true,
    color: '#3D3932',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './AstronautSticker.png',
    fullDecal: './AstronautSticker.png',
})

export default state