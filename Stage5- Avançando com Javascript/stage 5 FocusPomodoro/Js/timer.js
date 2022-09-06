import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    sound
}){


    let timerTimeOut

    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(newMinutes, seconds){
        //Lógica para resetar o cronometro ao inicio depois de atingir o zero
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds

        minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }
    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    //Função contdown para decrementar tempo usando setTimeOut:
    function contdown(){
        timerTimeOut = setTimeout(function(){

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            
            //Lógica para boleano do if, onde so podera aplicar o if se as duas condições forem cumpridas
            let isFinished = minutes <= 0 && seconds <= 0
            
            updateDisplay(minutes, 0)

            if(isFinished){
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return
            }
            if(seconds<=0){
                seconds = 60
                --minutes
            }
            updateDisplay(minutes, String(seconds - 1) )

            contdown()

        },1000)
    }
    function updateMinutes(newMinutes){
        minutes = newMinutes
    }
    function hold(){
        clearTimeout(timerTimeOut) 
    }
    return{
        contdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
    }