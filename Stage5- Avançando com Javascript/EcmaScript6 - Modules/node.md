Export Import Simples:
    Export Simples:
        const message = "menssagem!"
 ****       alert(message) 

    Import Simples
        import './arquivo.js'




Default Export Import:
    Exportando direto o dado:
        export default 'Algum dado'


    Exportado dado já existente:
        export default text

    Import default:
        import qualquerNome from './arquivo.Js'
  

Named Export:
    Exportando direto o dado:
        export const today = Date.Now()
    
    Exportado dado já existente:
        const double = number => number * 2
        export{double}

    Importando Named: 1 dado
        import{today} from './arquivo.js' 

    Importando Named: 2 ou mais dados
        import {double, today} from './arquivo.js


Misto (default e named):
    Export Misto:
        const date = new Date()
        const greeting = name => `hello ${name}`

        export default function (argument){
            console.log(date, greeting(argument))
        }

        export { date, greeting}
    
    Import Misto:
        import funcaoPadrao, { date, greeting} from './arquivo.js'

Import/Export as:
    Export as:
        export function sum(a, b){
            return a + b
        }
    Import as:
        import{ sum as soma} from './arquivo.js'

Import/Export * as:
    Export * as:
        export const sum = (a, b) => a + b
        export const multiply = (a, b) => a * b
        export const subtract = (a, b) => a - b
        export const divide = (a, b) => a / b

    Import * as:
        import * as calculator from './arquivo.js'    