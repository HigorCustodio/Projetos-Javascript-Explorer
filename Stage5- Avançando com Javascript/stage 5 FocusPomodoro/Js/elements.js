
//Utilizando a DOM (Document Object Model): "Procure no meu documento o seletor css:(seletor-css)"
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay= document.querySelector('.minutes')
const secondsDisplay= document.querySelector('.seconds')

export {
    
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay
}
