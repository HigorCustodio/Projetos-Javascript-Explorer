import{ Modal } from './modal.js'
import  {alertError}  from './alert-error.js'
import {calculateIMC, notANumber} from './utils.js'

// Variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//Funções

form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    if(weightOrHeightIsNotANumber){
        alertError.open()
        return;
    }
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

//Fechando a janela de erro ao digitar nos campos input    
inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()
   