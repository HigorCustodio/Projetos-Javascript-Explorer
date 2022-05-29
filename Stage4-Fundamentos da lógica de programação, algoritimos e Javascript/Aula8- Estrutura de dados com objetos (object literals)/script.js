/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/
const patients = [
    {
        name: "Higor",
        age: 24,
        weight: 73,
        heigth: 1.73,
    },
    {
        name: "Raysa",
        age: 31,
        weight: 60,
        heigth: 1.68,
    },
    {
        name: "Hugo",
        age: 24,
        weight: 80,
        heigth: 1.73,
    },
]
let patientsName = []

for (let patient of patients){
    patientsName.push(patient.name)
}
alert(patientsName)