/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Higor Custodio",
        age: 24,
        weight: 73,
        height: 173,
    },
    {
        name: "Raysa Poltronieri",
        age: 31,
        weight: 58,
        height: 168,
    },
    {
    name: "Hugo Custodio",
    age: 24,
    weight: 80,
    height: 173,
    },
]
function IMC(weight, height){
    return (weight / ((height / 100) **2)).toFixed(2)
        
}
function printPatientIMC(patient){
    return `
        O paciente ${patient.name} possuí um IMC de:
        ${IMC(patient.weight, patient.height)}
    `
    
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage); 
}