/*
    Conteúdo da aula 01 
        - Como perguntar e como mostrar na tela;
    Desafio: Pergunte o nome do usuário e escreva a mensagem:
                "Olá, [nome do usuário}"
*/
/* 
    - Inserindo entrada de dados através de uma pergunta ao usuário
        -> prompt("Qual o é seu nome?")
    
    - Criando variável para poder usar em contatenação com uma string e mostrar na tela a mensagem solicitada
        -> let nome_do_usuario=(prompt("Qual o é seu nome?"))
*/
//Perguntando ao usuário 
let nome_do_usuario=(prompt("Qual o é seu nome?"))

// Mostrando mensagem na tela através da função alert
alert("Olá, "+ nome_do_usuario)