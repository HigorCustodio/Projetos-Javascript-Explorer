import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff
} from "./elements.js"

export default function ({controls, timer, sound}){
    

//Utilizando o callback para construir a funcionalidade: (retirar play e substituir por pause.)
     
    buttonPlay.addEventListener('click',function(){
        controls.play()
        timer.contdown()
        sound.pressButton()
    })
       
  //Utilizando o callback para construir a funcionalidade: (retirar play e substituir por pause.)
     
        buttonPause.addEventListener('click', function(){
            controls.pause()
            timer.hold()
            sound.pressButton()
        })
  
  // colocando a funcionalidade de ao apertar em stop voltamos para play independente do estado da aplicação:
    
        buttonStop.addEventListener('click', function(){
            controls.reset()
            timer.reset()
            sound.pressButton()
        })
   
  // Colocando funcionalidade no botão de som da aplicação, com som e sem som:
  //sem som:
   
        buttonSoundOn.addEventListener('click', function(){
            buttonSoundOn.classList.add('hide')
            buttonSoundOff.classList.remove('hide')
            sound.bgAudio.pause()
        })


    //com som:
    
        buttonSoundOff.addEventListener('click', function(){
            buttonSoundOff.classList.add('hide')
            buttonSoundOn.classList.remove('hide')
            sound.bgAudio.play()
        })
   
  //Definindo os minutos desejados pelo usuario;
        
            buttonSet.addEventListener('click', function(){
                let newMinutes = controls.getMinutes()

                if(!newMinutes){
                    timer.reset()
                    return
                }

            timer.updateDisplay(newMinutes, 0)
            timer.updateMinutes(newMinutes)

    })
   
 
}    