/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/
let option;

const patients = [
    {
        name: "Higor Custodio",
        age: 24,
        weight: 73,
        heigth: 1.73,
    },
    {
        name: "Raysa Poltronieri",
        age: 31,
        weight: 58,
        heigth: 1.68,
    },
    {
    name: "Hugo Custodio",
    age: 24,
    weight: 80,
    heigth: 1.73,
    },
]

while(option != 4){

let option = prompt(`
Lista de Pacientes:

Escolha o paciente desejado:
1 - Higor Custodio;
2 - Raysa Poltronieri;
3 - Hugo Custodio;
4 - Sair
`)

if(option == 1){
   
    alert(`
        Nome do paciente: ${patients[0].name}. 
        
        Dados do paciente:
    
        Idade: ${patients[0].age};
        Peso: ${patients[0].weight};
        Altura: ${patients[0].heigth};
    `)

}else if(option == 2){
    
   
    alert(`
        Nome do paciente: ${patients[1].name}. 
        
        Dados do paciente:
    
        Idade: ${patients[1].age};
        Peso: ${patients[1].weight};
        Altura: ${patients[1].heigth};
    `)

}else if(option == 3){
    
    alert(`
    Nome do paciente: ${patients[0].name}. 
    
    Dados do paciente:

    Idade: ${patients[2].age};
    Peso: ${patients[2].weight};
    Altura: ${patients[2].heigth};
`)
} else{ 
    alert("Saindo do programa. Good Bye!")
}

}



